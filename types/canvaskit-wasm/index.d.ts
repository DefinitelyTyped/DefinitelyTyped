// Type definitions for canvaskit-wasm 0.18
// Project: https://github.com/google/skia/tree/master/modules/canvaskit
// Definitions by: Alexander Shilov <https://github.com/ashlanderr>
//                 Kevin Lubick <https://github.com/kjlubick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Minimum TypeScript Version: 3.7
export interface CanvasKitInitOptions {
    /**
     * This callback will be invoked when the CanvasKit loader needs to fetch a file (e.g.
     * the blob of WASM code). The correct url prefix should be applied.
     * @param file - the name of the file that is about to be loaded.
     */
    locateFile(file: string): string;
}

export interface CanvasKit {
    // Helpers
    /**
     * Constructs a Color with the same API as CSS's rgba(), that is
     * Internally, Colors are four unpremultiplied 32-bit floats: r, g, b, a.
     * In order to construct one with more precision or in a wider gamut,
     * use CanvasKit.Color4f().
     *
     * @param r - red value, clamped to [0, 255].
     * @param g - green value, clamped to [0, 255].
     * @param b - blue value, clamped to [0, 255].
     * @param a - alpha value, from 0 to 1.0. By default is 1.0 (opaque).
     */
    Color(r: number, g: number, b: number, a?: number): SkColor;

    /**
     * Construct a 4-float color. Float values are typically between 0.0 and 1.0.
     * @param r - red value.
     * @param g - green value.
     * @param b - blue value.
     * @param a - alpha value. By default is 1.0 (opaque).
     */
    Color4f(r: number, g: number, b: number, a?: number): SkColor;

    /**
     * Constructs a Color as a 32 bit unsigned integer, with 8 bits assigned to each channel.
     * Channels are expected to be between 0 and 255 and will be clamped as such.
     * If a is omitted, it will be 255 (opaque).
     *
     * This is not the preferred way to use colors in Skia APIs, use Color or Color4f.
     * @param r - red value, clamped to [0, 255].
     * @param g - green value, clamped to [0, 255].
     * @param b - blue value, clamped to [0, 255].
     * @param a - alpha value, from 0 to 1.0. By default is 1.0 (opaque).
     */
    ColorAsInt(r: number, g: number, b: number, a?: number): SkColorInt;

    /**
     * Returns a css style [r, g, b, a] where r, g, b are returned as
     * ints in the range [0, 255] and where a is scaled between 0 and 1.0.
     * [Deprecated] - this is trivial now that SkColor is 4 floats.
     */
    getColorComponents(c: SkColor): number[];

    /**
     * Takes in a CSS color value and returns a CanvasKit.Color
     * (which is an array of 4 floats in RGBA order). An optional colorMap
     * may be provided which maps custom strings to values.
     * In the CanvasKit canvas2d shim layer, we provide this map for processing
     * canvas2d calls, but not here for code size reasons.
     */
    parseColorString(color: string, colorMap?: object): SkColor;

    /**
     * Returns a copy of the passed in color with a new alpha value applied.
     * [Deprecated] - this is trivial now that SkColor is 4 floats.
     */
    multiplyByAlpha(c: SkColor, alpha: number): SkColor;

    /**
     * Computes color values for one-pass tonal alpha.
     * Note, if malloced colors are passed in, the memory pointed at by the MallocObj
     * will be overwritten with the computed tonal colors (and thus the return val can be
     * ignored).
     * @param colors
     */
    computeTonalColors(colors: TonalColorsInput): TonalColorsOutput;

    /**
     * Returns a rectangle with the given paramaters. See SkRect.h for more.
     * @param left - The x coordinate of the upper-left corner.
     * @param top  - The y coordinate of the upper-left corner.
     * @param right - The x coordinate of the lower-right corner.
     * @param bottom - The y coordinate of the lower-right corner.
     */
    LTRBRect(left: number, top: number, right: number, bottom: number): SkRect;

    /**
     * Returns a rectangle with the given paramaters. See SkRect.h for more.
     * @param x - The x coordinate of the upper-left corner.
     * @param y  - The y coordinate of the upper-left corner.
     * @param width - The width of the rectangle.
     * @param height - The height of the rectangle.
     */
    XYWHRect(x: number, y: number, width: number, height: number): SkRect;

    /**
     * Returns a rectangle with the given integer paramaters. See SkRect.h for more.
     * @param left - The x coordinate of the upper-left corner.
     * @param top  - The y coordinate of the upper-left corner.
     * @param right - The x coordinate of the lower-right corner.
     * @param bottom - The y coordinate of the lower-right corner.
     */
    LTRBiRect(left: number, top: number, right: number, bottom: number): SkIRect;

    /**
     * Returns a rectangle with the given paramaters. See SkRect.h for more.
     * @param x - The x coordinate of the upper-left corner.
     * @param y  - The y coordinate of the upper-left corner.
     * @param width - The width of the rectangle.
     * @param height - The height of the rectangle.
     */
    XYWHiRect(x: number, y: number, width: number, height: number): SkIRect;

    /**
     * Returns a rectangle with rounded corners consisting of the given rectangle and
     * the same radiusX and radiusY for all four corners.
     * @param rect - The base rectangle.
     * @param rx - The radius of the corners in the x direction.
     * @param ry - The radius of the corners in the y direction.
     */
    RRectXY(rect: InputRect, rx: number, ry: number): SkRRect;

    /**
     * Malloc returns a TypedArray backed by the C++ memory of the
     * given length. It should only be used by advanced users who
     * can manage memory and initialize values properly. When used
     * correctly, it can save copying of data between JS and C++.
     * When used incorrectly, it can lead to memory leaks.
     * Any memory allocated by CanvasKit.Malloc needs to be released with CanvasKit.Free.
     *
     * const mObj = CanvasKit.Malloc(Float32Array, 20);
     * Get a TypedArray view around the malloc'd memory (this does not copy anything).
     * const ta = mObj.toTypedArray();
     * // store data into ta
     * const cf = CanvasKit.SkColorFilter.MakeMatrix(ta); // mObj could also be used.
     *
     * // eventually...
     * CanvasKit.Free(mObj);
     *
     * @param typedArray - constructor for the typedArray.
     * @param len - number of *elements* to store.
     */
    Malloc(typedArray: TypedArrayConstructor, len: number): MallocObj;

    /**
     * As Malloc but for GlyphIDs. This helper exists to make sure the JS side and the C++ side
     * stay in agreement with how wide GlyphIDs are.
     * @param len - number of GlyphIDs to make space for.
     */
    MallocGlyphIDs(len: number): MallocObj;

    /**
     * Free frees the memory returned by Malloc.
     * Any memory allocated by CanvasKit.Malloc needs to be released with CanvasKit.Free.
     */
    Free(m: MallocObj): void;

    // Surface related functions
    /**
     * Creates a Surface on a given canvas. If both GPU and CPU modes have been compiled in, this
     * will first try to create a GPU surface and then fallback to a CPU one if that fails. If just
     * the CPU mode has been compiled in, a CPU surface will be created.
     * @param canvas - either the canvas element itself or a string with the DOM id of it.
     */
    MakeCanvasSurface(canvas: HTMLCanvasElement | string): SkSurface | null;

    /**
     * Creates a CPU backed (aka raster) surface.
     * @param canvas - either the canvas element itself or a string with the DOM id of it.
     */
    MakeSWCanvasSurface(canvas: HTMLCanvasElement | string): SkSurface | null;

    /**
     * A helper for creating a WebGL backed (aka GPU) surface and falling back to a CPU surface if
     * the GPU one cannot be created. This works for both WebGL 1 and WebGL 2.
     * @param canvas - Either the canvas element itself or a string with the DOM id of it.
     * @param colorSpace - One of the supported color spaces. Default is SRGB.
     * @param opts - Options that will get passed to the creation of the WebGL context.
     */
    MakeWebGLCanvasSurface(canvas: HTMLCanvasElement | string, colorSpace?: ColorSpace,
                           opts?: WebGLOptions): SkSurface | null;

    /**
     * Returns a CPU backed surface with the given dimensions, an SRGB colorspace, Unpremul
     * alphaType and 8888 color type. The pixels belonging to this surface  will be in memory and
     * not visible.
     * @param width - number of pixels of the width of the drawable area.
     * @param height - number of pixels of the height of the drawable area.
     */
    MakeSurface(width: number, height: number): SkSurface | null;

    /**
     * Creates a WebGL Context from the given canvas with the given options. If options are omitted,
     * sensible defaults will be used.
     * @param canvas
     * @param opts
     */
    GetWebGLContext(canvas: HTMLCanvasElement, opts?: WebGLOptions): WebGLContextHandle;

    /**
     * Creates a GrContext from the given WebGL Context.
     * @param ctx
     */
    MakeGrContext(ctx: WebGLContextHandle): GrContext;

    /**
     * Creates a Surface that will be drawn to the given GrContext (and show up on screen).
     * @param ctx
     * @param width - number of pixels of the width of the visible area.
     * @param height - number of pixels of the height of the visible area.
     * @param colorSpace
     */
    MakeOnScreenGLSurface(ctx: GrContext, width: number, height: number,
                          colorSpace: ColorSpace): SkSurface | null;

    /**
     * Returns a (non-visible) SkSurface on the GPU. It has the given dimensions and uses 8888
     * color depth and premultiplied alpha. See SkSurface.h for more details.
     * @param ctx
     * @param width
     * @param height
     */
    MakeRenderTarget(ctx: GrContext, width: number, height: number): SkSurface | null;

    /**
     * Returns a (non-visible) SkSurface on the GPU. It has the settings provided by image info.
     * See SkSurface.h for more details.
     * @param ctx
     * @param info
     */
    MakeRenderTarget(ctx: GrContext, info: SkImageInfo): SkSurface | null;

    /**
     * Returns the current WebGLContext that the wasm code is configured to draw to. It is
     * recommended to capture this value after creating a new WebGL surface if there are multiple
     * surfaces on the screen.
     */
    currentContext(): WebGLContextHandle;

    /**
     * Sets the WebGLContext that the wasm code will draw to.
     *
     * When a WebGL call is made on the C++ side, it is routed to the JS side to target a specific
     * WebGL context. WebGL calls are methods on a WebGL context, so CanvasKit needs to know which
     * context to send the calls to.
     * @param ctx
     */
    setCurrentContext(ctx: WebGLContextHandle): void;

    /**
     * Returns the max size of the global cache for bitmaps used by CanvasKit.
     */
    getDecodeCacheLimitBytes(): number;
    /**
     * Returns the current size of the global cache for bitmaps used by CanvasKit.
     */
    getDecodeCacheUsedBytes(): number;

    /**
     * Sets the max size of the global cache for bitmaps used by CanvasKit.
     * @param size - number of bytes that can be used to cache bitmaps.
     */
    setDecodeCacheLimitBytes(size: number): void;

    /**
     * Decodes the given bytes into an animated image. Returns null if the bytes were invalid.
     * The passed in bytes will be copied into the WASM heap, so the caller can dispose of them.
     * @param bytes
     */
    MakeAnimatedImageFromEncoded(bytes: Uint8Array | ArrayBuffer): SkAnimatedImage | null;

    /**
     * Returns an emulated Canvas2D of the given size.
     * @param width
     * @param height
     */
    MakeCanvas(width: number, height: number): EmulatedCanvas2D;

    /**
     * Return an SkImage backed by the encoded data, but attempt to defer decoding until the image
     * is actually used/drawn. This deferral allows the system to cache the result, either on the
     * CPU or on the GPU, depending on where the image is drawn.
     * This decoding uses the codecs that have been compiled into CanvasKit. If the bytes are
     * invalid (or an unrecognized codec), null will be returned. See SkImage.h for more details.
     * @param bytes
     */
    MakeImageFromEncoded(bytes: Uint8Array | ArrayBuffer): SkImage | null;

    /**
     * Returns an SkImage with the data from the provided CanvasImageSource (e.g. <img>). This will
     * use the browser's built in codecs, in that src will be drawn to a canvas and then readback
     * and placed into an SkImage.
     * @param src
     */
    MakeImageFromCanvasImageSource(src: CanvasImageSource): SkImage;

    /**
     * Creates a new path by combining the given paths according to op. If this fails, null will
     * be returned instead.
     * @param one
     * @param two
     * @param op
     */
    MakePathFromOp(one: SkPath, two: SkPath, op: PathOp): SkPath | null;

    /**
     * Creates a new path from the provided SVG string. If this fails, null will be
     * returned instead.
     * @param str
     */
    MakePathFromSVGString(str: string): SkPath | null;

    /**
     * Returns an SkPicture which has been serialized previously to the given bytes.
     * @param bytes
     */
    MakeSkPicture(bytes: Uint8Array | ArrayBuffer): SkPicture | null;

    /**
     * Returns an SkVertices based on the given positions and optional parameters.
     * See SkVertices.h (especially the Builder) for more details.
     * @param mode
     * @param positions
     * @param textureCoordinates
     * @param colors - either a list of int colors or a flattened color array.
     * @param indices
     * @param isVolatile
     */
    MakeSkVertices(mode: VertexMode, positions: number[][], textureCoordinates?: number[][] | null,
                   colors?: Float32Array | ColorIntArray | null, indices?: number[] | null,
                   isVolatile?: boolean): SkVertices;

    /**
     * Returns a Skottie animation built from the provided json string.
     * Requires that Skottie be compiled into CanvasKit.
     * @param json
     */
    MakeAnimation(json: string): SkottieAnimation;

    /**
     * Returns a managed Skottie animation built from the provided json string and assets.
     * Requires that Skottie be compiled into CanvasKit.
     * @param json
     * @param assets - a dictionary of named blobs: { key: ArrayBuffer, ... }
     * @param filterPrefix - an optional string acting as a name filter for selecting "interesting"
     *                       Lottie properties (surfaced in the embedded player controls)
     */
    MakeManagedAnimation(json: string, assets?: Record<string, ArrayBuffer>,
                         filterPrefix?: string): ManagedSkottieAnimation;

    /**
     * Returns a Particles effect built from the provided json string and assets.
     * Requires that Particles be compiled into CanvasKit
     * @param json
     * @param assets
     */
    MakeParticles(json: string, assets?: Record<string, ArrayBuffer>): Particles;

    /**
     * Returns the underlying data from SkData as a Uint8Array.
     * @param data
     */
    getSkDataBytes(data: SkData): Uint8Array;

    // Constructors, i.e. things made with `new CanvasKit.Foo()`;
    readonly ImageData: ImageDataConstructor;
    readonly ParagraphStyle: ParagraphStyleConstructor;
    readonly ShapedText: ShapedTextConstructor;
    readonly SkContourMeasureIter: SkContourMeasureIterConstructor;
    readonly SkFont: SkFontConstructor;
    readonly SkPaint: DefaultConstructor<SkPaint>;
    readonly SkPath: SkPathConstructorAndFactory;
    readonly SkPictureRecorder: DefaultConstructor<SkPictureRecorder>;
    readonly TextStyle: TextStyleConstructor;

    // Factories, i.e. things made with CanvasKit.Foo.MakeTurboEncapsulator()
    readonly ParagraphBuilder: ParagraphBuilderFactory;
    readonly SkColorFilter: SkColorFilterFactory;
    readonly SkFontMgr: SkFontMgrFactory;
    readonly SkImageFilter: SkImageFilterFactory;
    readonly SkMaskFilter: SkMaskFilterFactory;
    readonly SkPathEffect: SkPathEffectFactory;
    readonly SkRuntimeEffect: SkRuntimeEffectFactory;
    readonly SkShader: SkShaderFactory;
    readonly SkTextBlob: SkTextBlobFactory;
    readonly TypefaceFontProvider: TypefaceFontProviderFactory;

    // Misc
    readonly SkColorMatrix: ColorMatrixHelpers;
    readonly SkMatrix: Matrix3x3Helpers;
    readonly SkM44: Matrix4x4Helpers;
    readonly SkVector: VectorHelpers;

    // Core Enums
    readonly AlphaType: AlphaTypeEnumValues;
    readonly BlendMode: BlendModeEnumValues;
    readonly BlurStyle: BlurStyleEnumValues;
    readonly ClipOp: ClipOpEnumValues;
    readonly ColorType: ColorTypeEnumValues;
    readonly FillType: FillTypeEnumValues;
    readonly FilterQuality: FilterQualityEnumValues;
    readonly FontEdging: FontEdgingEnumValues;
    readonly FontHinting: FontHintingEnumValues;
    readonly ImageFormat: ImageFormatEnumValues;
    readonly PaintStyle: PaintStyleEnumValues;
    readonly PathOp: PathOpEnumValues;
    readonly PointMode: PointModeEnumValues;
    readonly SkColorSpace: ColorSpaceEnumValues;
    readonly StrokeCap: StrokeCapEnumValues;
    readonly StrokeJoin: StrokeJoinEnumValues;
    readonly TileMode: TileModeEnumValues;
    readonly VertexMode: VertexModeEnumValues;

    // Core Constants
    readonly TRANSPARENT: SkColor;
    readonly BLACK: SkColor;
    readonly WHITE: SkColor;
    readonly RED: SkColor;
    readonly GREEN: SkColor;
    readonly BLUE: SkColor;
    readonly YELLOW: SkColor;
    readonly CYAN: SkColor;
    readonly MAGENTA: SkColor;

    readonly MOVE_VERB: number;
    readonly LINE_VERB: number;
    readonly QUAD_VERB: number;
    readonly CONIC_VERB: number;
    readonly CUBIC_VERB: number;
    readonly CLOSE_VERB: number;

    readonly SaveLayerInitWithPrevious: SaveLayerFlag;
    readonly SaveLayerF16ColorType: SaveLayerFlag;

    readonly gpu: boolean; // if GPU code was compiled in

    // Paragraph Enums
    readonly Affinity: AffinityEnumValues;
    readonly DecorationStyle: DecorationStyleEnumValues;
    readonly FontSlant: FontSlantEnumValues;
    readonly FontWeight: FontWeightEnumValues;
    readonly FontWidth: FontWidthEnumValues;
    readonly PlaceholderAlignment: PlaceholderAlignmentEnumValues;
    readonly RectHeightStyle: RectHeightStyleEnumValues;
    readonly RectWidthStyle: RectWidthStyleEnumValues;
    readonly TextAlign: TextAlignEnumValues;
    readonly TextBaseline: TextBaselineEnumValues;
    readonly TextDirection: TextDirectionEnumValues;

    // Paragraph Constants
    readonly NoDecoration: number;
    readonly UnderlineDecoration: number;
    readonly OverlineDecoration: number;
    readonly LineThroughDecoration: number;
}

export interface Camera {
    /** a 3d point locating the camera. */
    eye: Vector3;
    /** center of attention - the 3d point the camera is looking at. */
    coa: Vector3;
    /**
     * A unit vector pointing the cameras up direction. Note that using only eye and coa
     * would leave the roll of the camera unspecified.
     */
    up: Vector3;
    /** near clipping plane distance */
    near: number;
    /** far clipping plane distance */
    far: number;
    /** field of view in radians */
    angle: AngleInRadians;
}

/**
 * CanvasKit is built with Emscripten and Embind. Embind adds the following methods to all objects
 * that are exposed with it.
 */
export interface EmbindObject<T extends EmbindObject<T>> {
    clone(): T;
    delete(): void;
    deleteAfter(): void;
    isAliasOf(other: any): boolean;
    isDeleted(): boolean;
}

export interface EmbindSingleton {
    // Technically Embind includes the other methods too, but they should not be called for a
    // singleton.
    isAliasOf(other: any): boolean;
}

/**
 * Represents the set of enum values.
 */
export interface EmbindEnum {
    readonly values: number[];
}

/**
 * Represents a single member of an enum.
 */
export interface EmbindEnumEntity {
    readonly value: number;
}

export interface EmulatedCanvas2D {
    /**
     * Cleans up all resources associated with this emulated canvas.
     */
    dispose(): void;
    /**
     * Decodes an image with the given bytes.
     * @param bytes
     */
    decodeImage(bytes: ArrayBuffer | Uint8Array): SkImage;

    /**
     * Returns an emulated canvas2d context if type == '2d', null otherwise.
     * @param type
     */
    getContext(type: string): EmulatedCanvas2DContext | null;

    /**
     * Loads the given font with the given descriptors. Emulates new FontFace().
     * @param bytes
     * @param descriptors
     */
    loadFont(bytes: ArrayBuffer | Uint8Array, descriptors: object): void;

    /**
     * Returns an new emulated Path2D object.
     * @param str - an SVG string representing a path.
     */
    makePath2D(str?: string): EmulatedPath2D;

    /**
     * Returns the current canvas as a base64 encoded image string.
     * @param codec - image/png by default; image/jpeg also supported.
     * @param quality
     */
    toDataURL(codec?: string, quality?: number): string;
}

/** Part of the Canvas2D emulation code */
export type EmulatedCanvas2DContext = CanvasRenderingContext2D;
export type EmulatedImageData = ImageData;
export type EmulatedPath2D = Path2D;

export interface FontStyle {
    weight?: FontWeight;
    width?: FontWidth;
    slant?: FontSlant;
}

/**
 * See GrContext.h for more on this class.
 */
export interface GrContext extends EmbindObject<GrContext> {
    getResourceCacheLimitBytes(): number;
    getResourceCacheUsageBytes(): number;
    releaseResourcesAndAbandonContext(): void;
    setResourceCacheLimitBytes(bytes: number): void;
}

/**
 * This object is a wrapper around a pointer to some memory on the WASM heap. The type of the
 * pointer was determined at creation time.
 */
export interface MallocObj {
    /**
     * The number of objects this pointer refers to.
     */
    readonly length: number;
    /**
     * The "pointer" into the WASM memory. Should be fixed over the lifetime of the object.
     */
    readonly byteOffset: number;
    /**
     * Return a read/write view into a subset of the memory. Do not cache the TypedArray this
     * returns, it may be invalidated if the WASM heap is resized. This is the same as calling
     * .toTypedArray().subarray() except the returned TypedArray can also be passed into an API
     * and not cause an additional copy.
     */
    subarray(start: number, end: number): TypedArray;
    /**
     * Return a read/write view of the memory. Do not cache the TypedArray this returns, it may be
     * invalidated if the WASM heap is resized. If this TypedArray is passed into a CanvasKit API,
     * it will not be copied again, only the pointer will be re-used.
     */
    toTypedArray(): TypedArray;
}

export interface ManagedSkottieAnimation extends SkottieAnimation {
    setColor(key: string, color: InputColor): void;
    setOpacity(key: string, opacity: number): void;
    getMarkers(): object[];
    getColorProps(): object[];
    getOpacityProps(): object[];
}

/**
 * See Paragraph.h for more information on this class. This is only available if Paragraph has
 * been compiled in.
 */
export interface Paragraph extends EmbindObject<Paragraph> {
    didExceedMaxLines(): boolean;
    getAlphabeticBaseline(): number;

    /**
     * Returns the index of the glyph that corresponds to the provided coordinate,
     * with the top left corner as the origin, and +y direction as down.
     */
    getGlyphPositionAtCoordinate(dx: number, dy: number): PositionWithAffinity;

    getHeight(): number;
    getIdeographicBaseline(): number;
    getLongestLine(): number;
    getMaxIntrinsicWidth(): number;
    getMaxWidth(): number;
    getMinIntrinsicWidth(): number;
    getRectsForPlaceholders(): FlattenedRectangleArray;

    /**
     * Returns bounding boxes that enclose all text in the range of glpyh indexes [start, end).
     * @param start
     * @param end
     * @param hStyle
     * @param wStyle
     */
    getRectsForRange(start: number, end: number, hStyle: RectHeightStyle,
                     wStyle: RectWidthStyle): FlattenedRectangleArray;

    /**
     * Finds the first and last glyphs that define a word containing the glyph at index offset.
     * @param offset
     */
    getWordBoundary(offset: number): URange;

    /**
     * Lays out the text in the paragraph so it is wrapped to the given width.
     * @param width
     */
    layout(width: number): void;
}

export interface ParagraphBuilder extends EmbindObject<ParagraphBuilder> {
    /**
     * Pushes the information required to leave an open space.
     * @param width
     * @param height
     * @param alignment
     * @param baseline
     * @param offset
     */
    addPlaceholder(width?: number, height?: number, alignment?: PlaceholderAlignment,
                   baseline?: TextBaseline, offset?: number): void;

    /**
     * Adds text to the builder. Forms the proper runs to use the upper-most style
     * on the style_stack.
     * @param str
     */
    addText(str: string): void;

    /**
     * Returns a Paragraph object that can be used to be layout and paint the text to an
     * SkCanvas.
     */
    build(): Paragraph;

    /**
     * Remove a style from the stack. Useful to apply different styles to chunks
     * of text such as bolding.
     */
    pop(): void;

    /**
     * Push a style to the stack. The corresponding text added with addText will
     * use the top-most style.
     * @param text
     */
    pushStyle(text: TextStyle): void;

    /**
     * Pushes a TextStyle using paints instead of colors for foreground and background.
     * @param textStyle
     * @param fg
     * @param bg
     */
    pushPaintStyle(textStyle: TextStyle, fg: SkPaint, bg: SkPaint): void;
}

export interface ParagraphStyle {
    disableHinting?: boolean;
    ellipsis?: string;
    heightMultiplier?: number;
    maxLines?: number;
    strutStyle?: StrutStyle;
    textAlign?: TextAlign;
    textDirection?: TextDirection;
    textStyle?: TextStyle;
}

export interface PositionWithAffinity {
    pos: number;
    affinity: Affinity;
}

/**
 * See SkParticleEffect.h for more details.
 */
export interface Particles extends EmbindObject<Particles> {
    /**
     * Draws the current state of the particles on the given canvas.
     * @param canvas
     */
    draw(canvas: SkCanvas): void;

    /**
     * Returns a Float32Array bound to the WASM memory of these uniforms. Changing these
     * floats will change the corresponding uniforms instantly.
     */
    effectUniforms(): Float32Array;

    /**
     * Returns the nth uniform from the effect.
     * @param index
     */
    getEffectUniform(index: number): ParticlesUniform;

    /**
     * Returns the number of uniforms on the effect.
     */
    getEffectUniformCount(): number;

    /**
     * Returns the number of float uniforms on the effect.
     */
    getEffectUniformFloatCount(): number;

    /**
     * Returns the name of the nth effect uniform.
     * @param index
     */
    getEffectUniformName(index: number): string;

    /**
     * Returns the nth uniform on the particles.
     * @param index
     */
    getParticleUniform(index: number): ParticlesUniform;

    /**
     * Returns the count of uniforms on the particles.
     */
    getParticleUniformCount(): number;

    /**
     * Returns the number of float uniforms on the particles.
     */
    getParticleUniformFloatCount(): number;

    /**
     * Returns the name of the nth particle uniform.
     * @param index
     */
    getParticleUniformName(index: number): string;

    /**
     * Returns a Float32Array bound to the WASM memory of these uniforms. Changing these
     * floats will change the corresponding uniforms instantly.
     */
    particleUniforms(): Float32Array;

    /**
     * Sets the base position of the effect.
     * @param point
     */
    setPosition(point: SkPoint): void;

    /**
     * Sets the base rate of the effect.
     * @param rate
     */
    setRate(rate: number): void;

    /**
     * Starts playing the effect.
     * @param now
     * @param looping
     */
    start(now: number, looping: boolean): void;

    /**
     * Updates the effect using the new time.
     * @param now
     */
    update(now: number): void;
}

export interface ParticlesUniform {
    columns: number;
    rows: number;
    /** The index into the uniforms array that this uniform begins. */
    slot: number;
}

/**
 * A simple wrapper around SkTextBlob and the simple Text Shaper.
 */
export interface ShapedText extends EmbindObject<ShapedText> {
    /**
     * Return the bounding area for the given text.
     * @param outputArray - if provided, the bounding box will be copied into this array instead of
     *                      allocating a new one.
     */
    getBounds(outputArray?: SkRect): SkRect;
}

export interface ShapedTextOpts {
    text: string;
    font: SkFont;
    leftToRight: boolean;
    width: number;
}

/**
 * See SkAnimatedImage.h for more information on this class.
 */
export interface SkAnimatedImage extends EmbindObject<SkAnimatedImage> {
    /**
     * Decodes the next frame. Returns -1 when the animation is on the last frame.
     */
    decodeNextFrame(): number;

    /**
     * Return the total number of frames in the animation.
     */
    getFrameCount(): number;

    /**
     * Return the repetition count for this animation.
     */
    getRepetitionCount(): number;

    /**
     * Returns the possibly scaled height of the image.
     */
    height(): number;

    /**
     * Returns a still image of the current frame or null if there is no current frame.
     */
    makeImageAtCurrentFrame(): SkImage | null;

    /**
     * Reset the animation to the beginning.
     */
    reset(): void;

    /**
     * Returns the possibly scaled width of the image.
     */
    width(): number;
}

/**
 * See SkCanvas.h for more information on this class.
 */
export interface SkCanvas extends EmbindObject<SkCanvas> {
    /**
     * Fills the current clip with the given color using Src BlendMode.
     * This has the effect of replacing all pixels contained by clip with color.
     * @param color
     */
    clear(color: InputColor): void;

    /**
     * Replaces clip with the intersection or difference of the current clip and path,
     * with an aliased or anti-aliased clip edge.
     * @param path
     * @param op
     * @param doAntiAlias
     */
    clipPath(path: SkPath, op: ClipOp, doAntiAlias: boolean): void;

    /**
     * Replaces clip with the intersection or difference of the current clip and rect,
     * with an aliased or anti-aliased clip edge.
     * @param rect
     * @param op
     * @param doAntiAlias
     */
    clipRect(rect: InputRect, op: ClipOp, doAntiAlias: boolean): void;

    /**
     * Replaces clip with the intersection or difference of the current clip and rrect,
     * with an aliased or anti-aliased clip edge.
     * @param rrect
     * @param op
     * @param doAntiAlias
     */
    clipRRect(rrect: InputRRect, op: ClipOp, doAntiAlias: boolean): void;

    /**
     * Replaces current matrix with m premultiplied with the existing matrix.
     * @param m
     */
    concat(m: InputMatrix): void;

    /**
     * Draws arc using clip, SkMatrix, and SkPaint paint.
     *
     * Arc is part of oval bounded by oval, sweeping from startAngle to startAngle plus
     * sweepAngle. startAngle and sweepAngle are in degrees.
     * @param oval - bounds of oval containing arc to draw
     * @param startAngle - angle in degrees where arc begins
     * @param sweepAngle - sweep angle in degrees; positive is clockwise
     * @param useCenter - if true, include the center of the oval
     * @param paint
     */
    drawArc(oval: InputRect, startAngle: AngleInDegrees, sweepAngle: AngleInDegrees,
            useCenter: boolean, paint: SkPaint): void;

    /**
     * Draws a set of sprites from atlas, using clip, SkMatrix, and optional SkPaint paint.
     * @param atlas - SkImage containing sprites
     * @param srcRects - SkRect locations of sprites in atlas
     * @param dstXforms - SkRSXform mappings for sprites in atlas
     * @param paint
     * @param blendMode - BlendMode combining colors and sprites
     * @param colors - If provided, will be blended with sprite using blendMode.
     */
    drawAtlas(atlas: SkImage, srcRects: InputFlattenedRectangleArray,
              dstXforms: InputFlattenedRSXFormArray, paint: SkPaint,
              blendMode?: BlendMode, colors?: ColorIntArray): void;

    /**
     * Draws a circle at (cx, cy) with the given radius.
     * @param cx
     * @param cy
     * @param radius
     * @param paint
     */
    drawCircle(cx: number, cy: number, radius: number, paint: SkPaint): void;

    /**
     * Fills clip with the given color.
     * @param color
     * @param blendMode - defaults to SrcOver.
     */
    drawColor(color: InputColor, blendMode?: BlendMode): void;

    /**
     * Fills clip with the given color.
     * @param r - red value (typically from 0 to 1.0).
     * @param g - green value (typically from 0 to 1.0).
     * @param b - blue value (typically from 0 to 1.0).
     * @param a - alpha value, range 0 to 1.0 (1.0 is opaque).
     * @param blendMode - defaults to SrcOver.
     */
    drawColorComponents(r: number, g: number, b: number, a: number, blendMode?: BlendMode): void;

    /**
     * Fills clip with the given color.
     * @param color
     * @param blendMode - defaults to SrcOver.
     */
    drawColorInt(color: SkColorInt, blendMode?: BlendMode): void;

    /**
     * Draws SkRRect outer and inner using clip, SkMatrix, and SkPaint paint.
     * outer must contain inner or the drawing is undefined.
     * @param outer
     * @param inner
     * @param paint
     */
    drawDRRect(outer: InputRRect, inner: InputRRect, paint: SkPaint): void;

    /**
     * Draws the given image with its top-left corner at (left, top) using the current clip,
     * the current matrix, and optionally-provided paint.
     * @param img
     * @param left
     * @param top
     * @param paint
     */
    drawImage(img: SkImage, left: number, top: number, paint?: SkPaint): void;

    /**
     * Draws the current frame of the given animated image with its top-left corner at
     * (left, top) using the current clip, the current matrix, and optionally-provided paint.
     * @param aImg
     * @param left
     * @param top
     * @param paint
     */
    drawImageAtCurrentFrame(aImg: SkAnimatedImage, left: number, top: number,
                            paint?: SkPaint): void;

    /**
     *  Draws the provided image stretched proportionally to fit into dst rectangle.
     *  The center rectangle divides the image into nine sections: four sides, four corners, and
     *  the center.
     * @param img
     * @param center
     * @param dest
     * @param paint
     */
    drawImageNine(img: SkImage, center: InputIRect, dest: InputRect, paint: SkPaint): void;

    /**
     * Draws sub-rectangle src from provided image, scaled and translated to fill dst rectangle.
     * @param img
     * @param src
     * @param dest
     * @param paint
     * @param fastSample - if false, will filter strictly within src.
     */
    drawImageRect(img: SkImage, src: InputRect, dest: InputRect, paint: SkPaint,
                  fastSample?: boolean): void;

    /**
     * Draws line segment from (x0, y0) to (x1, y1) using the current clip, current matrix,
     * and the provided paint.
     * @param x0
     * @param y0
     * @param x1
     * @param y1
     * @param paint
     */
    drawLine(x0: number, y0: number, x1: number, y1: number, paint: SkPaint): void;

    /**
     * Draws an oval bounded by the given rectangle using the current clip, current matrix,
     * and the provided paint.
     * @param oval
     * @param paint
     */
    drawOval(oval: InputRect, paint: SkPaint): void;

    /**
     * Fills clip with the given paint.
     * @param paint
     */
    drawPaint(paint: SkPaint): void;

    /**
     * Draws the given Paragraph at the provided coordinates.
     * Requires the Paragraph code to be compiled in.
     * @param p
     * @param x
     * @param y
     */
    drawParagraph(p: Paragraph, x: number, y: number): void;

    /**
     * Draws the given path using the current clip, current matrix, and the provided paint.
     * @param path
     * @param paint
     */
    drawPath(path: SkPath, paint: SkPaint): void;

    /**
     * Draws the given picture using the current clip, current matrix, and the provided paint.
     * @param skp
     */
    drawPicture(skp: SkPicture): void;

    /**
     * Draws the given points using the current clip, current matrix, and the provided paint.
     *
     * See SkCanvas.h for more on the mode and its interaction with paint.
     * @param mode
     * @param points
     * @param paint
     */
    drawPoints(mode: PointMode, points: InputFlattenedPointArray, paint: SkPaint): void;

    /**
     * Draws the given rectangle using the current clip, current matrix, and the provided paint.
     * @param rect
     * @param paint
     */
    drawRect(rect: InputRect, paint: SkPaint): void;

    /**
     * Draws the given rectangle using the current clip, current matrix, and the provided paint.
     * @param left
     * @param top
     * @param right
     * @param bottom
     * @param paint
     */
    drawRect4f(left: number, top: number, right: number, bottom: number, paint: SkPaint): void;

    /**
     * Draws the given rectangle with rounded corners using the current clip, current matrix,
     * and the provided paint.
     * @param rrect
     * @param paint
     */
    drawRRect(rrect: InputRRect, paint: SkPaint): void;

    /**
     * Draw an offset spot shadow and outlining ambient shadow for the given path using a disc
     * light. See SkShadowUtils.h for more details
     * @param path - The occluder used to generate the shadows.
     * @param zPlaneParams - Values for the plane function which returns the Z offset of the
     *                       occluder from the canvas based on local x and y values (the current
     *                       matrix is not applied).
     * @param lightPos - The 3D position of the light relative to the canvas plane. This is
     *                   independent of the canvas's current matrix.
     * @param lightRadius - The radius of the disc light.
     * @param ambientColor - The color of the ambient shadow.
     * @param spotColor -  The color of the spot shadow.
     * @param flags - See SkShadowFlags.h; 0 means use default options.
     */
    drawShadow(path: SkPath, zPlaneParams: Vector3, lightPos: Vector3, lightRadius: number,
               ambientColor: InputColor, spotColor: InputColor, flags: number): void;

    /**
     * Draw the given text at the location (x, y) using the provided paint and font. If non-shaped
     * text is provided, the text will be drawn as is; no line-breaking, no ligatures, etc.
     * @param str - either a string or pre-shaped text. Unicode text is supported.
     * @param x
     * @param y
     * @param paint
     * @param font
     */
    drawText(str: string | ShapedText, x: number, y: number, paint: SkPaint, font: SkFont): void;

    /**
     * Draws the given TextBlob at (x, y) using the current clip, current matrix, and the
     * provided paint. Reminder that the fonts used to draw TextBlob are part of the blob.
     * @param blob
     * @param x
     * @param y
     * @param paint
     */
    drawTextBlob(blob: SkTextBlob, x: number, y: number, paint: SkPaint): void;

    /**
     * Draws the given vertices (a triangle mesh) using the current clip, current matrix, and the
     * provided paint.
     *  If paint contains an SkShader and vertices does not contain texCoords, the shader
     *  is mapped using the vertices' positions.
     *  If vertices colors are defined in vertices, and SkPaint paint contains SkShader,
     *  SkBlendMode mode combines vertices colors with SkShader.
     * @param verts
     * @param mode
     * @param paint
     */
    drawVertices(verts: SkVertices, mode: BlendMode, paint: SkPaint): void;

    /**
     * Returns the 4x4 matrix matching the given marker or null if there was none.
     * See also markCTM.
     * @param marker
     */
    findMarkedCTM(marker: string): Matrix4x4 | null;

    /**
     * Returns the current transform from local coordinates to the 'device', which for most
     * purposes means pixels.
     */
    getLocalToDevice(): Matrix4x4;

    /**
     * Returns the number of saved states, each containing: SkMatrix and clip.
     * Equals the number of save() calls less the number of restore() calls plus one.
     * The save count of a new canvas is one.
     */
    getSaveCount(): number;

    /**
     * Legacy version of getLocalToDevice(), which strips away any Z information, and
     * just returns a 3x3 version.
     */
    getTotalMatrix(): number[];

    /**
     * Creates SkSurface matching info and props, and associates it with SkCanvas.
     * Returns null if no match found.
     * @param info
     */
    makeSurface(info: SkImageInfo): SkSurface | null;

    /**
     * Record a marker (provided by caller) for the current CTM. This does not change anything
     * about the ctm or clip, but does "name" this matrix value, so it can be referenced by
     * custom effects (who access it by specifying the same name).
     * See also findMarkedCTM.
     * @param marker
     */
    markCTM(marker: string): void;

    /**
     * Copies the given rectangle of pixels into a new Uint8Array and returns it. If alphaType,
     * colorType, and colorSpace are provided, those will describe the output format.
     * @param x
     * @param y
     * @param w
     * @param h
     * @param alphaType - defaults to Unpremul
     * @param colorType - defaults to RGBA_8888
     * @param colorSpace - defaults to SRGB
     * @param dstRowBytes
     */
    readPixels(x: number, y: number, w: number, h: number, alphaType?: AlphaType,
               colorType?: ColorType, colorSpace?: ColorSpace, dstRowBytes?: number): Uint8Array;

    /**
     * Removes changes to the current matrix and clip since SkCanvas state was
     * last saved. The state is removed from the stack.
     * Does nothing if the stack is empty.
     */
    restore(): void;

    /**
     * Restores state to a previous stack value.
     * @param saveCount
     */
    restoreToCount(saveCount: number): void;

    /**
     * Rotates the current matrix by the number of degrees.
     * @param rot - angle of rotation in degrees.
     * @param rx
     * @param ry
     */
    rotate(rot: AngleInDegrees, rx: number, ry: number): void;

    /**
     * Saves the current matrix and clip and returns current height of the stack.
     */
    save(): number;

    /**
     * Saves SkMatrix and clip, and allocates a SkBitmap for subsequent drawing.
     * Calling restore() discards changes to SkMatrix and clip, and draws the SkBitmap.
     * It returns the height of the stack.
     * See SkCanvas.h for more.
     * @param paint
     * @param bounds
     * @param backdrop
     * @param flags
     */
    saveLayer(paint?: SkPaint, bounds?: InputRect | null, backdrop?: SkImageFilter | null,
              flags?: SaveLayerFlag): number;

    /**
     * Scales the current matrix by sx on the x-axis and sy on the y-axis.
     * @param sx
     * @param sy
     */
    scale(sx: number, sy: number): void;

    /**
     *  Skews SkMatrix by sx on the x-axis and sy on the y-axis. A positive value of sx
     *  skews the drawing right as y-axis values increase; a positive value of sy skews
     *  the drawing down as x-axis values increase.
     * @param sx
     * @param sy
     */
    skew(sx: number, sy: number): void;

    /**
     * Translates SkMatrix by dx along the x-axis and dy along the y-axis.
     * @param dx
     * @param dy
     */
    translate(dx: number, dy: number): void;

    /**
     * Writes the given rectangle of pixels to the provided coordinates. The source pixels
     * will be converted to the canvas's alphaType and colorType if they do not match.
     * @param pixels
     * @param srcWidth
     * @param srcHeight
     * @param destX
     * @param destY
     * @param alphaType - defaults to Unpremul
     * @param colorType - defaults to RGBA_8888
     * @param colorSpace - defaults to SRGB
     */
    writePixels(pixels: Uint8Array | number[], srcWidth: number, srcHeight: number,
                destX: number, destY: number, alphaType?: AlphaType, colorType?: ColorType,
                colorSpace?: ColorSpace): boolean;
}

/**
 * See SkColorFilter.h for more on this class. The objects are opaque.
 */
export type SkColorFilter = EmbindObject<SkColorFilter>;

export interface SkContourMeasureIter extends EmbindObject<SkContourMeasureIter> {
    /**
     *  Iterates through contours in path, returning a contour-measure object for each contour
     *  in the path. Returns null when it is done.
     *
     *  See SkContourMeasure.h for more details.
     */
    next(): SkContourMeasure | null;
}

export interface SkContourMeasure extends EmbindObject<SkContourMeasure> {
    /**
     * Returns the given position and tangent line for the distance on the given contour.
     * @param distance - will be pinned between 0 and length().
     */
    getPosTan(distance: number): PosTan;

    /**
     * Returns an SkPath representing the segement of this contour.
     * @param startD - will be pinned between 0 and length()
     * @param stopD - will be pinned between 0 and length()
     * @param startWithMoveTo
     */
    getSegment(startD: number, stopD: number, startWithMoveTo: boolean): SkPath;

    /**
     * Returns true if the contour is closed.
     */
    isClosed(): boolean;

    /**
     * Returns the length of this contour.
     */
    length(): number;
}

/**
 * Represents a blob of memory. See SkData.h for more on this class.
 */
export interface SkData extends EmbindObject<SkData> {
    /**
     * Return the number of bytes in this container.
     */
    size(): number;
}

/**
 * See SkFont.h for more on this class.
 */
export interface SkFont extends EmbindObject<SkFont> {
    /**
     * Retrieves the bounds for each glyph in glyphs.
     * If paint is not null, its stroking, SkPathEffect, and SkMaskFilter fields are respected.
     * These are returned as flattened rectangles.  For each glyph, there will be 4 floats for
     * left, top, right, bottom (relative to 0, 0) for that glyph.
     * @param glyphs
     * @param paint
     * @param output - if provided, the results will be copied into this array.
     */
    getGlyphBounds(glyphs: InputGlyphIDArray, paint?: SkPaint | null,
                   output?: Float32Array): Float32Array;

    /**
     * Retrieves the glyph ids for each code point in the provided string. Note that glyph IDs
     * are font-dependent; different fonts may have different ids for the same code point.
     * @param str
     * @param numCodePoints - the number of code points in the string. Defaults to str.length.
     * @param output - if provided, the results will be copied into this array.
     */
    getGlyphIDs(str: string, numCodePoints?: number,
                output?: TypedArray): GlyphIDArray;

    /**
     * Retrieves the advanceX measurements for each glyph.
     * If paint is not null, its stroking, SkPathEffect, and SkMaskFilter fields are respected.
     * One width per glyph is returned in the returned array.
     * @param glyphs
     * @param paint
     * @param output - if provided, the results will be copied into this array.
     */
    getGlyphWidths(glyphs: InputGlyphIDArray, paint?: SkPaint | null,
                   output?: Float32Array): Float32Array;

    /**
     * Returns text scale on x-axis. Default value is 1.
     */
    getScaleX(): number;

    /**
     * Returns text size in points.
     */
    getSize(): number;

    /**
     * Returns text skew on x-axis. Default value is zero.
     */
    getSkewX(): number;

    /**
     * Returns the SkTypeface set for this font.
     */
    getTypeface(): SkTypeface | null;

    /**
     * Retrieves the advanceX measurements for each code point in str.
     * [deprecated] Use getGlyphIDs and getGlyphWidths instead.
     * @param str
     */
    getWidths(str: string): number[];

    /**
     * Retrieves the total advance with the given string.
     * If attempting to shape text to fit into a given width, using getGlyphIDs and getGlyphWidths
     * is probably easier / more efficient.
     * @param str
     */
    measureText(str: string): number;

    /**
     * Requests, but does not require, that edge pixels draw opaque or with partial transparency.
     * @param edging
     */
    setEdging(edging: FontEdging): void;

    /**
     * Requests, but does not require, to use bitmaps in fonts instead of outlines.
     * @param embeddedBitmaps
     */
    setEmbeddedBitmaps(embeddedBitmaps: boolean): void;

    /**
     * Sets level of glyph outline adjustment.
     * @param hinting
     */
    setHinting(hinting: FontHinting): void;

    /**
     * Requests, but does not require, linearly scalable font and glyph metrics.
     *
     * For outline fonts 'true' means font and glyph metrics should ignore hinting and rounding.
     * Note that some bitmap formats may not be able to scale linearly and will ignore this flag.
     * @param linearMetrics
     */
    setLinearMetrics(linearMetrics: boolean): void;

    /**
     * Sets the text scale on the x-axis.
     * @param sx
     */
    setScaleX(sx: number): void;

    /**
     * Sets the text size in points on this font.
     * @param points
     */
    setSize(points: number): void;

    /**
     * Sets the text-skew on the x axis for this font.
     * @param sx
     */
    setSkewX(sx: number): void;

    /**
     * Requests, but does not require, that glyphs respect sub-pixel positioning.
     * @param subpixel
     */
    setSubpixel(subpixel: boolean): void;

    /**
     * Sets the typeface to use with this font. null means to clear the typeface and use the
     * default one.
     * @param face
     */
    setTypeface(face: SkTypeface | null): void;
}

/**
 * See SkFontMgr.h for more details
 */
export interface SkFontMgr extends EmbindObject<SkFontMgr> {
    /**
     * Return the number of font families loaded in this manager. Useful for debugging.
     */
    countFamilies(): number;

    /**
     * Return the nth family name. Useful for debugging.
     * @param index
     */
    getFamilyName(index: number): string;

    /**
     * Create a typeface for the specified bytes and return it.
     * @param fontData
     */
    makeTypefaceFromData(fontData: ArrayBuffer): SkTypeface;
}

/**
 * See SkImage.h for more information on this class.
 */
export interface SkImage extends EmbindObject<SkImage> {
    /**
     * Encodes this image's pixels to PNG and returns them. Must be built with the PNG codec.
     */
    encodeToData(): SkData;

    /**
     * Encodes this image's pixels to the specified format and returns them. Must be built with
     * the specified codec.
     * @param fmt
     * @param quality - a value from 0 to 100; 100 is the least lossy. May be ignored.
     */
    encodeToDataWithFormat(fmt: EncodedImageFormat, quality: number): SkData;

    /**
     * Return the height in pixels of the image.
     */
    height(): number;

    /**
     * Returns this image as a shader with the specified tiling.
     * @param tx - tile mode in the x direction.
     * @param ty - tile mode in the y direction.
     * @param localMatrix
     */
    makeShader(tx: TileMode, ty: TileMode, localMatrix?: InputMatrix): SkShader;

    /**
     * Returns a TypedArray containing the pixels reading starting at (srcX, srcY) and does not
     * exceed the size indicated by imageInfo. See SkImage.h for more on the caveats.
     *
     * @param imageInfo - describes the destination format of the pixels.
     * @param srcX
     * @param srcY
     * @returns a Uint8Array if RGB_8888 was requested, Float32Array if RGBA_F32 was requested.
     */
    readPixels(imageInfo: SkImageInfo, srcX: number, srcY: number): Uint8Array | Float32Array | null;

    /**
     * Return the width in pixels of the image.
     */
    width(): number;
}

/**
 * See SkImageFilter.h for more on this class. The objects are opaque.
 */
export type SkImageFilter = EmbindObject<SkImageFilter>;

export interface SkImageInfo {
    alphaType: AlphaType;
    colorSpace: ColorSpace;
    colorType: ColorType;
    height: number;
    width: number;
}

/**
 * See SkMaskFilter.h for more on this class. The objects are opaque.
 */
export type SkMaskFilter = EmbindObject<SkMaskFilter>;

/**
 * See SkPaint.h for more information on this class.
 */
export interface SkPaint extends EmbindObject<SkPaint> {
    /**
     * Returns a copy of this paint.
     */
    copy(): SkPaint;

    /**
     * Returns the blend mode, that is, the mode used to combine source color
     * with destination color.
     */
    getBlendMode(): BlendMode;

    /**
     * Retrieves the alpha and RGB unpremultiplied. RGB are extended sRGB values
     * (sRGB gamut, and encoded with the sRGB transfer function).
     */
    getColor(): SkColor;

    /**
     * Returns the image filtering level.
     * [deprecated] This will be removed in an upcoming release.
     */
    getFilterQuality(): FilterQuality;

    /**
     * Returns the geometry drawn at the beginning and end of strokes.
     */
    getStrokeCap(): StrokeCap;

    /**
     * Returns the geometry drawn at the corners of strokes.
     */
    getStrokeJoin(): StrokeJoin;

    /**
     *  Returns the limit at which a sharp corner is drawn beveled.
     */
    getStrokeMiter(): number;

    /**
     * Returns the thickness of the pen used to outline the shape.
     */
    getStrokeWidth(): number;

    /**
     * Replaces alpha, leaving RGBA unchanged. 0 means fully transparent, 1.0 means opaque.
     * @param alpha
     */
    setAlphaf(alpha: number): void;

    /**
     * Requests, but does not require, that edge pixels draw opaque or with
     * partial transparency.
     * @param aa
     */
    setAntiAlias(aa: boolean): void;

    /**
     * Sets the blend mode that is, the mode used to combine source color
     * with destination color.
     * @param mode
     */
    setBlendMode(mode: BlendMode): void;

    /**
     * Sets alpha and RGB used when stroking and filling. The color is four floating
     * point values, unpremultiplied. The color values are interpreted as being in
     * the provided colorSpace.
     * @param color
     * @param colorSpace - defaults to sRGB
     */
    setColor(color: InputColor, colorSpace?: ColorSpace): void;

    /**
     * Sets alpha and RGB used when stroking and filling. The color is four floating
     * point values, unpremultiplied. The color values are interpreted as being in
     * the provided colorSpace.
     * @param r
     * @param g
     * @param b
     * @param a
     * @param colorSpace - defaults to sRGB
     */
    setColorComponents(r: number, g: number, b: number, a: number, colorSpace?: ColorSpace): void;

    /**
     * Sets the current color filter, replacing the existing one if there was one.
     * @param filter
     */
    setColorFilter(filter: SkColorFilter): void;

    /**
     * Sets the color used when stroking and filling. The color values are interpreted as being in
     * the provided colorSpace.
     * @param color
     * @param colorSpace - defaults to sRGB.
     */
    setColorInt(color: SkColorInt, colorSpace?: ColorSpace): void;

    /**
     * Sets the image filtering level.
     * [deprecated] This will be removed in an upcoming release.
     * @param quality
     */
    setFilterQuality(quality: FilterQuality): void;

    /**
     * Sets the current image filter, replacing the existing one if there was one.
     * @param filter
     */
    setImageFilter(filter: SkImageFilter): void;

    /**
     * Sets the current mask filter, replacing the existing one if there was one.
     * @param filter
     */
    setMaskFilter(filter: SkMaskFilter): void;

    /**
     * Sets the current path effect, replacing the existing one if there was one.
     * @param effect
     */
    setPathEffect(effect: SkPathEffect): void;

    /**
     * Sets the current shader, replacing the existing one if there was one.
     * @param shader
     */
    setShader(shader: SkShader): void;

    /**
     * Sets the geometry drawn at the beginning and end of strokes.
     * @param cap
     */
    setStrokeCap(cap: StrokeCap): void;

    /**
     * Sets the geometry drawn at the corners of strokes.
     * @param join
     */
    setStrokeJoin(join: StrokeJoin): void;

    /**
     * Sets the limit at which a sharp corner is drawn beveled.
     * @param limit
     */
    setStrokeMiter(limit: number): void;

    /**
     * Sets the thickness of the pen used to outline the shape.
     * @param width
     */
    setStrokeWidth(width: number): void;

    /**
     * Sets whether the geometry is filled or stroked.
     * @param style
     */
    setStyle(style: PaintStyle): void;
}

/**
 * See SkPath.h for more information on this class.
 */
export interface SkPath extends EmbindObject<SkPath> {
    /**
     * Appends arc to SkPath, as the start of new contour. Arc added is part of ellipse
     * bounded by oval, from startAngle through sweepAngle. Both startAngle and
     * sweepAngle are measured in degrees, where zero degrees is aligned with the
     * positive x-axis, and positive sweeps extends arc clockwise.
     * Returns the modified path for easier chaining.
     * @param oval
     * @param startAngle
     * @param sweepAngle
     */
    addArc(oval: InputRect, startAngle: AngleInDegrees, sweepAngle: AngleInDegrees): SkPath;

    /**
     * Adds oval to SkPath, appending kMove_Verb, four kConic_Verb, and kClose_Verb.
     * Oval is upright ellipse bounded by SkRect oval with radii equal to half oval width
     * and half oval height. Oval begins at start and continues clockwise by default.
     * Returns the modified path for easier chaining.
     * @param oval
     * @param isCCW - if the path should be drawn counter-clockwise or not
     * @param startIndex - index of initial point of ellipse
     */
    addOval(oval: InputRect, isCCW?: boolean, startIndex?: number): SkPath;

    /**
     * Takes 1, 2, 7, or 10 required args, where the first arg is always the path.
     * The last arg is an optional boolean and chooses between add or extend mode.
     * The options for the remaining args are:
     *   - an array of 6 or 9 parameters (perspective is optional)
     *   - the 9 parameters of a full matrix or
     *     the 6 non-perspective params of a matrix.
     * Returns the modified path for easier chaining (or null if params were incorrect).
     * @param args
     */
    addPath(...args: any[]): SkPath | null;

    /**
     * Adds contour created from array of n points, adding (count - 1) line segments.
     * Contour added starts at pts[0], then adds a line for every additional point
     * in pts array. If close is true, appends kClose_Verb to SkPath, connecting
     * pts[count - 1] and pts[0].
     * Returns the modified path for easier chaining.
     * @param points - either an array of 2-arrays representing points or a malloc'd object of
     *                 length n to represent 2*n points. Even indices are x, odd are y.
     * @param close - should add a line connecting last point to the first point.
     */
    addPoly(points: MallocObj | number[][], close: boolean): SkPath;

    /**
     * Adds SkRect to SkPath, appending kMove_Verb, three kLine_Verb, and kClose_Verb,
     * starting with top-left corner of SkRect; followed by top-right, bottom-right,
     * and bottom-left if isCCW is false; or followed by bottom-left,
     * bottom-right, and top-right if isCCW is true.
     * Returns the modified path for easier chaining.
     * @param rect
     * @param isCCW
     */
    addRect(rect: InputRect, isCCW?: boolean): SkPath;

    /**
     * Adds rrect to SkPath, creating a new closed contour.
     * Returns the modified path for easier chaining.
     * @param rrect
     * @param isCCW
     */
    addRRect(rrect: InputRRect, isCCW?: boolean): SkPath;

    /**
     * Adds the given verbs and associated points/weights to the path. The process
     * reads the first verb from verbs and then the appropriate number of points from the
     * FlattenedPointArray (e.g. 2 points for moveTo, 4 points for quadTo, etc). If the verb is
     * a conic, a weight will be read from the WeightList.
     * Returns the modified path for easier chaining
     * @param verbs - the verbs that create this path, in the order of being drawn.
     * @param points - represents n points with 2n floats.
     * @param weights - used if any of the verbs are conics, can be omitted otherwise.
     */
    addVerbsPointsWeights(verbs: VerbList, points: InputFlattenedPointArray,
                          weights?: WeightList): SkPath;

    /**
     * Adds an arc to this path, emulating the Canvas2D behavior.
     * Returns the modified path for easier chaining.
     * @param x
     * @param y
     * @param radius
     * @param startAngle
     * @param endAngle
     * @param isCCW
     */
    arc(x: number, y: number, radius: number, startAngle: AngleInRadians, endAngle: AngleInRadians,
        isCCW?: boolean): SkPath;

    /**
     * Appends arc to SkPath. Arc added is part of ellipse
     * bounded by oval, from startAngle through sweepAngle. Both startAngle and
     * sweepAngle are measured in degrees, where zero degrees is aligned with the
     * positive x-axis, and positive sweeps extends arc clockwise.
     * Returns the modified path for easier chaining.
     * @param oval
     * @param startAngle
     * @param endAngle
     * @param forceMoveTo
     */
    arcToOval(oval: InputRect, startAngle: AngleInDegrees, endAngle: AngleInDegrees,
              forceMoveTo: boolean): SkPath;

    /**
     * Appends arc to SkPath. Arc is implemented by one or more conics weighted to
     * describe part of oval with radii (rx, ry) rotated by xAxisRotate degrees. Arc
     * curves from last SkPath SkPoint to (x, y), choosing one of four possible routes:
     * clockwise or counterclockwise, and smaller or larger. See SkPath.h for more details.
     * Returns the modified path for easier chaining.
     * @param rx
     * @param ry
     * @param xAxisRotate
     * @param useSmallArc
     * @param isCCW
     * @param x
     * @param y
     */
    arcToRotated(rx: number, ry: number, xAxisRotate: AngleInDegrees, useSmallArc: boolean,
                 isCCW: boolean, x: number, y: number): SkPath;

    /**
     * Appends arc to SkPath, after appending line if needed. Arc is implemented by conic
     * weighted to describe part of circle. Arc is contained by tangent from
     * last SkPath point to (x1, y1), and tangent from (x1, y1) to (x2, y2). Arc
     * is part of circle sized to radius, positioned so it touches both tangent lines.
     * Returns the modified path for easier chaining.
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @param radius
     */
    arcToTangent(x1: number, y1: number, x2: number, y2: number, radius: number): SkPath;

    /**
     * Appends CLOSE_VERB to SkPath. A closed contour connects the first and last point
     * with a line, forming a continuous loop.
     * Returns the modified path for easier chaining.
     */
    close(): SkPath;

    /**
     * Returns minimum and maximum axes values of the lines and curves in SkPath.
     * Returns (0, 0, 0, 0) if SkPath contains no points.
     * Returned bounds width and height may be larger or smaller than area affected
     * when SkPath is drawn.
     *
     * Behaves identically to getBounds() when SkPath contains
     * only lines. If SkPath contains curves, computed bounds includes
     * the maximum extent of the quad, conic, or cubic; is slower than getBounds();
     * and unlike getBounds(), does not cache the result.
     * @param outputArray - if provided, the bounding box will be copied into this array instead of
     *                      allocating a new one.
     */
    computeTightBounds(outputArray?: SkRect): SkRect;

    /**
     * Adds conic from last point towards (x1, y1), to (x2, y2), weighted by w.
     * If SkPath is empty, or path is closed, the last point is set to (0, 0)
     * before adding conic.
     * Returns the modified path for easier chaining.
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @param w
     */
    conicTo(x1: number, y1: number, x2: number, y2: number, w: number): SkPath;

    /**
     * Returns true if the point (x, y) is contained by SkPath, taking into
     * account FillType.
     * @param x
     * @param y
     */
    contains(x: number, y: number): boolean;

    /**
     * Returns a copy of this SkPath.
     */
    copy(): SkPath;

    /**
     * Returns the number of points in this path. Initially zero.
     */
    countPoints(): number;

    /**
     *  Adds cubic from last point towards (x1, y1), then towards (x2, y2), ending at
     * (x3, y3). If SkPath is empty, or path is closed, the last point is set to
     * (0, 0) before adding cubic.
     * @param cpx1
     * @param cpy1
     * @param cpx2
     * @param cpy2
     * @param x
     * @param y
     */
    cubicTo(cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number): SkPath;

    /**
     * Changes this path to be the dashed version of itself. This is the same effect as creating
     * an SkDashPathEffect and calling filterPath on this path.
     * @param on
     * @param off
     * @param phase
     */
    dash(on: number, off: number, phase: number): boolean;

    /**
     * Returns true if other path is equal to this path.
     * @param other
     */
    equals(other: SkPath): boolean;

    /**
     * Returns minimum and maximum axes values of SkPoint array.
     * Returns (0, 0, 0, 0) if SkPath contains no points. Returned bounds width and height may
     * be larger or smaller than area affected when SkPath is drawn.
     * @param outputArray - if provided, the bounding box will be copied into this array instead of
     *                      allocating a new one.
     */
    getBounds(outputArray?: SkRect): SkRect;

    /**
     * Return the FillType for this path.
     */
    getFillType(): FillType;

    /**
     * Returns SkPoint at index in SkPoint array. Valid range for index is
     * 0 to countPoints() - 1.
     * @param index
     */
    getPoint(index: number): SkPoint;

    /**
     * Returns true if there are no verbs in the path.
     */
    isEmpty(): boolean;

    /**
     * Returns true if the path is volatile; it will not be altered or discarded
     * by the caller after it is drawn. SkPath by default have volatile set false, allowing
     * SkSurface to attach a cache of data which speeds repeated drawing. If true, SkSurface
     * may not speed repeated drawing.
     */
    isVolatile(): boolean;

    /**
     * Adds line from last point to (x, y). If SkPath is empty, or last path is closed,
     * last point is set to (0, 0) before adding line.
     * Returns the modified path for easier chaining.
     * @param x
     * @param y
     */
    lineTo(x: number, y: number): SkPath;

    /**
     * Adds begininning of contour at the given point.
     * Returns the modified path for easier chaining.
     * @param x
     * @param y
     */
    moveTo(x: number, y: number): SkPath;

    /**
     * Translates all the points in the path by dx, dy.
     * Returns the modified path for easier chaining.
     * @param dx
     * @param dy
     */
    offset(dx: number, dy: number): SkPath;

    /**
     * Combines this path with the other path using the given PathOp. Returns false if the operation
     * fails.
     * @param other
     * @param op
     */
    op(other: SkPath, op: PathOp): boolean;

    /**
     * Adds quad from last point towards (x1, y1), to (x2, y2).
     * If SkPath is empty, or path is closed, last point is set to (0, 0) before adding quad.
     * Returns the modified path for easier chaining.
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     */
    quadTo(x1: number, y1: number, x2: number, y2: number): SkPath;

    /**
     * Relative version of arcToRotated.
     * @param rx
     * @param ry
     * @param xAxisRotate
     * @param useSmallArc
     * @param isCCW
     * @param dx
     * @param dy
     */
    rArcTo(rx: number, ry: number, xAxisRotate: AngleInDegrees, useSmallArc: boolean,
           isCCW: boolean, dx: number, dy: number): SkPath;

    /**
     * Relative version of conicTo.
     * @param dx1
     * @param dy1
     * @param dx2
     * @param dy2
     * @param w
     */
    rConicTo(dx1: number, dy1: number, dx2: number, dy2: number, w: number): SkPath;

    /**
     * Relative version of cubicTo.
     * @param cpx1
     * @param cpy1
     * @param cpx2
     * @param cpy2
     * @param x
     * @param y
     */
    rCubicTo(cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number): SkPath;

    /**
     * Sets SkPath to its initial state.
     * Removes verb array, point array, and weights, and sets FillType to Winding.
     * Internal storage associated with SkPath is released
     */
    reset(): void;

    /**
     * Sets SkPath to its initial state.
     * Removes verb array, point array, and weights, and sets FillType to Winding.
     * Internal storage associated with SkPath is *not* released.
     * Use rewind() instead of reset() if SkPath storage will be reused and performance
     * is critical.
     */
    rewind(): void;

    /**
     * Relative version of lineTo.
     * @param x
     * @param y
     */
    rLineTo(x: number, y: number): SkPath;

    /**
     * Relative version of moveTo.
     * @param x
     * @param y
     */
    rMoveTo(x: number, y: number): SkPath;

    /**
     * Relative version of quadTo.
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     */
    rQuadTo(x1: number, y1: number, x2: number, y2: number): SkPath;

    /**
     * Sets FillType, the rule used to fill SkPath.
     * @param fill
     */
    setFillType(fill: FillType): void;

    /**
     * Specifies whether SkPath is volatile; whether it will be altered or discarded
     * by the caller after it is drawn. SkPath by default have volatile set false.
     *
     * Mark animating or temporary paths as volatile to improve performance.
     * Mark unchanging SkPath non-volatile to improve repeated rendering.
     * @param volatile
     */
    setIsVolatile(volatile: boolean): void;

    /**
     * Set this path to a set of non-overlapping contours that describe the
     * same area as the original path.
     * The curve order is reduced where possible so that cubics may
     * be turned into quadratics, and quadratics maybe turned into lines.
     *
     * Returns true if operation was able to produce a result.
     */
    simplify(): boolean;

    /**
     * Turns this path into the filled equivalent of the stroked path. Returns null if the operation
     * fails (e.g. the path is a hairline).
     * @param opts - describe how stroked path should look.
     */
    stroke(opts?: StrokeOpts): SkPath | null;

    /**
     * Serializes the contents of this path as a series of commands.
     */
    toCmds(): PathCommand[];

    /**
     * Returns this path as an SVG string.
     */
    toSVGString(): string;

    /**
     * Takes a 3x3 matrix as either an array or as 9 individual params.
     * @param args
     */
    transform(...args: any[]): SkPath;

    /**
     * Take start and stop "t" values (values between 0...1), and modify this path such that
     * it is a subset of the original path.
     * The trim values apply to the entire path, so if it contains several contours, all of them
     * are including in the calculation.
     * Null is returned if either input value is NaN.
     * @param startT - a value in the range [0.0, 1.0]. 0.0 is the beginning of the path.
     * @param stopT  - a value in the range [0.0, 1.0]. 1.0 is the end of the path.
     * @param isComplement
     */
    trim(startT: number, stopT: number, isComplement: boolean): SkPath | null;
}

/**
 * See SkPathEffect.h for more on this class. The objects are opaque.
 */
export type SkPathEffect = EmbindObject<SkPathEffect>;

/**
 * See SkPicture.h for more information on this class.
 *
 * Of note, SkPicture is *not* what is colloquially thought of as a "picture" (what we
 * call a bitmap). An SkPicture is a series of draw commands.
 */
export interface SkPicture extends EmbindObject<SkPicture> {
    /**
     * Returns the serialized format of this SkPicture. The format may change at anytime and
     * no promises are made for backwards or forward compatibility.
     */
    serialize(): SkData;
}

export interface SkPictureRecorder extends EmbindObject<SkPicture> {
    /**
     * Returns a canvas on which to draw. When done drawing, call finishRecordingAsPicture()
     *
     * @param bounds - a rect to cull the results.
     */
    beginRecording(bounds: InputRect): SkCanvas;

    /**
     * Returns the captured draw commands as a picture and invalidates the canvas returned earlier.
     */
    finishRecordingAsPicture(): SkPicture;
}

/**
 * See SkRuntimeEffect.h for more details.
 */
export interface SkRuntimeEffect extends EmbindObject<SkRuntimeEffect> {
    /**
     * Returns a shader executed using the given uniform data.
     * @param uniforms
     * @param isOpaque
     * @param localMatrix
     */
    makeShader(uniforms: Float32Array | number[], isOpaque?: boolean,
               localMatrix?: InputMatrix): SkShader;

    /**
     * Returns a shader executed using the given uniform data and the children as inputs.
     * @param uniforms
     * @param isOpaque
     * @param children
     * @param localMatrix
     */
    makeShaderWithChildren(uniforms: Float32Array | number[], isOpaque?: boolean,
                           children?: SkShader[], localMatrix?: InputMatrix): SkShader;
}

/**
 * See SkShader.h for more on this class. The objects are opaque.
 */
export type SkShader = EmbindObject<SkShader>;

export interface SkSurface extends EmbindObject<SkSurface> {
    /**
     * Call the given callback and save the result of that draw to a SkPicture with the
     * same dimensions as this surface. The SkPicture will be returned.
     * @param drawFrame - callback in which the client should draw something.
     */
    captureFrameAsSkPicture(drawFrame: (canvas: SkCanvas) => void): SkPicture;

    /**
     * Clean up the surface and any extra memory.
     * [Deprecated]: In the future, calls to delete() will be sufficient to clean up the memory.
     */
    dispose(): void;

    /**
     * Make sure any queued draws are sent to the screen or the GPU.
     */
    flush(): void;

    /**
     * Return a canvas that is backed by this surface. Any draws to the canvas will (eventually)
     * show up on the surface. The returned canvas is owned by the surface and does NOT need to
     * be cleaned up by the client.
     */
    getCanvas(): SkCanvas;

    /**
     * Returns the height of this surface in pixels.
     */
    height(): number;

    /**
     * Returns the ImageInfo associated with this surface.
     */
    imageInfo(): SkImageInfo;

    /**
     * Returns current contents of the surface as an SkImage. This image will be optimized to be
     * drawn to another surface of the same type. For example, if this surface is backed by the
     * GPU, the returned SkImage will be backed by a GPU texture.
     */
    makeImageSnapshot(bounds?: InputIRect): SkImage;

    /**
     * Returns a compatible SkSurface, haring the same raster or GPU properties of the original.
     * The pixels are not shared.
     * @param info - width, height, etc of the SkSurface.
     */
    makeSurface(info: SkImageInfo): SkSurface;

    /**
     * Returns if this Surface is a GPU-backed surface or not.
     */
    reportBackendTypeIsGPU(): boolean;

    /**
     * If this surface is GPU-backed, return the sample count of the surface.
     */
    sampleCnt(): number;

    /**
     * Returns the width of this surface in pixels.
     */
    width(): number;
}

/**
 * See SkTextBlob.h for more on this class. The objects are opaque.
 */
export type SkTextBlob = EmbindObject<SkTextBlob>;

/**
 * See SkTypeface.h for more on this class. The objects are opaque.
 */
export type SkTypeface = EmbindObject<SkTypeface>;

/**
 * See SkVertices.h for more on this class.
 */
export interface SkVertices extends EmbindObject<SkVertices> {
    /**
     * Return the bounding area for the vertices.
     * @param outputArray - if provided, the bounding box will be copied into this array instead of
     *                      allocating a new one.
     */
    bounds(outputArray?: SkRect): SkRect;

    /**
     * Return a unique ID for this vertices object.
     */
    uniqueID(): number;
}

export interface SkottieAnimation extends EmbindObject<SkottieAnimation> {
    /**
     * Returns the animation duration in seconds.
     */
    duration(): number;
    /**
     * Returns the animation frame rate (frames / second).
     */
    fps(): number;

    /**
     * Draws current animation frame. Must call seek or seekFrame first.
     * @param canvas
     * @param dstRect
     */
    render(canvas: SkCanvas, dstRect?: InputRect): void;

    /**
     * [deprecated] - use seekFrame
     * @param t - value from [0.0, 1.0]; 0 is first frame, 1 is final frame.
     * @param damageRect - will copy damage frame into this if provided.
     */
    seek(t: number, damageRect?: SkRect): SkRect;

    /**
     * Update the animation state to match |t|, specified as a frame index
     * i.e. relative to duration() * fps().
     *
     * Returns the rectangle that was affected by this animation.
     *
     * @param frame - Fractional values are allowed and meaningful - e.g.
     *                0.0 -> first frame
     *                1.0 -> second frame
     *                0.5 -> halfway between first and second frame
     * @param damageRect - will copy damage frame into this if provided.
     */
    seekFrame(frame: number, damageRect?: SkRect): SkRect;

    size(): SkPoint;
    version(): string;
}

/**
 * Options used for SkPath.stroke(). If an option is omitted, a sensible default will be used.
 */
export interface StrokeOpts {
    /** The width of the stroked lines. */
    width?: number;
    miter_limit?: number;
    /**
     * if > 1, increase precision, else if (0 < resScale < 1) reduce precision to
     * favor speed and size
     */
    precision?: number;
    join?: StrokeJoin;
    cap?: StrokeCap;
}

export interface StrutStyle {
    strutEnabled?: boolean;
    fontFamilies?: string[];
    fontStyle?: FontStyle;
    fontSize?: number;
    heightMultiplier?: number;
    leading?: number;
    forceStrutHeight?: boolean;
}

export interface TextFontFeatures {
    name: string;
    value: number;
}

export interface TextShadow {
    color?: InputColor;
    /**
     * 2d array for x and y offset. Defaults to [0, 0]
     */
    offset?: number[];
    blurRadius?: number;
}

export interface TextStyle {
    backgroundColor?: InputColor;
    color?: InputColor;
    decoration?: number;
    decorationColor?: InputColor;
    decorationThickness?: number;
    decrationStyle?: DecorationStyle;
    fontFamilies?: string[];
    fontFeatures?: TextFontFeatures[];
    fontSize?: number;
    fontStyle?: FontStyle;
    foregroundColor?: InputColor;
    heightMultiplier?: number;
    letterSpacing?: number;
    locale?: string;
    shadows?: TextShadow[];
    textBaseline?: TextBaseline;
    wordSpacing?: number;
}

export interface TonalColorsInput {
    ambient: InputColor;
    spot: InputColor;
}

export interface TonalColorsOutput {
    ambient: SkColor;
    spot: SkColor;
}

export interface TypefaceFontProvider extends EmbindObject<TypefaceFontProvider> {
    /**
     * Registers a given typeface with the given family name (ignoring whatever name the
     * typface has for itself).
     * @param bytes - the raw bytes for a typeface.
     * @param family
     */
    registerFont(bytes: ArrayBuffer | Uint8Array, family: string): void;
}

export interface URange {
    start: number;
    end: number;
}

/**
 * Options for configuring a WebGL context. If an option is omitted, a sensible default will
 * be used. These are defined by the WebGL standards.
 */
export interface WebGLOptions {
    alpha?: number;
    antialias?: number;
    depth?: number;
    enableExtensionsByDefault?: number;
    explicitSwapControl?: number;
    failIfMajorPerformanceCaveat?: number;
    majorVersion?: number;
    minorVersion?: number;
    preferLowPowerToHighPerformance?: number;
    premultipliedAlpha?: number;
    preserveDrawingBuffer?: number;
    renderViaOffscreenBackBuffer?: number;
    stencil?: number;
}

export interface DefaultConstructor<T> {
    new (): T;
}

export interface ColorMatrixHelpers {
    /**
     * Returns a new SkColorMatrix that is the result of multiplying outer*inner
     * @param outer
     * @param inner
     */
    concat(outer: SkColorMatrix, inner: SkColorMatrix): SkColorMatrix;

    /**
     * Returns an identity SkColorMatrix.
     */
    identity(): SkColorMatrix;

    /**
     * Sets the 4 "special" params that will translate the colors after they are multiplied
     * by the 4x4 matrix.
     * @param m
     * @param dr - delta red
     * @param dg - delta green
     * @param db - delta blue
     * @param da - delta alpha
     */
    postTranslate(m: SkColorMatrix, dr: number, dg: number, db: number, da: number): SkColorMatrix;

    /**
     * Returns a new SkColorMatrix that is rotated around a given axis.
     * @param axis - 0 for red, 1 for green, 2 for blue
     * @param sine - sin(angle)
     * @param cosine - cos(angle)
     */
    rotated(axis: number, sine: number, cosine: number): SkColorMatrix;

    /**
     * Returns a new SkColorMatrix that scales the colors as specified.
     * @param redScale
     * @param greenScale
     * @param blueScale
     * @param alphaScale
     */
    scaled(redScale: number, greenScale: number, blueScale: number,
           alphaScale: number): SkColorMatrix;
}

/**
 * A constructor for making an ImageData that is compatible with the Canvas2D emulation code.
 */
export interface ImageDataConstructor {
    new (width: number, height: number): EmulatedImageData;
    new (pixels: Uint8ClampedArray, width: number, height: number): EmulatedImageData;
}

/**
 * TODO(kjlubick) Make this API return Float32Arrays
 */
export interface Matrix3x3Helpers {
    /**
     * Returns a new identity 3x3 matrix.
     */
    identity(): number[];

    /**
     * Returns the inverse of the given 3x3 matrix or null if it is not invertible.
     * @param m
     */
    invert(m: Matrix3x3 | number[]): number[] | null;

    /**
     * Maps the given 2d points according to the given 3x3 matrix.
     * @param m
     * @param points - the flattened points to map; the results are computed in place on this array.
     */
    mapPoints(m: Matrix3x3 | number[], points: number[]): number[];

    /**
     * Multiplies the provided 3x3 matrices together from left to right.
     * @param matrices
     */
    multiply(...matrices: Array<(Matrix3x3 | number[])>): number[];

    /**
     * Returns a new 3x3 matrix representing a rotation by n radians.
     * @param radians
     * @param px - the X value to rotate around, defaults to 0.
     * @param py - the Y value to rotate around, defaults to 0.
     */
    rotated(radians: AngleInRadians, px?: number, py?: number): number[];

    /**
     * Returns a new 3x3 matrix representing a scale in the x and y directions.
     * @param sx - the scale in the X direction.
     * @param sy - the scale in the Y direction.
     * @param px - the X value to scale from, defaults to 0.
     * @param py - the Y value to scale from, defaults to 0.
     */
    scaled(sx: number, sy: number, px?: number, py?: number): number[];

    /**
     * Returns a new 3x3 matrix representing a scale in the x and y directions.
     * @param kx - the kurtosis in the X direction.
     * @param ky - the kurtosis in the Y direction.
     * @param px - the X value to skew from, defaults to 0.
     * @param py - the Y value to skew from, defaults to 0.
     */
    skewed(kx: number, ky: number, px?: number, py?: number): number[];

    /**
     * Returns a new 3x3 matrix representing a translation in the x and y directions.
     * @param dx
     * @param dy
     */
    translated(dx: number, dy: number): number[];
}

/**
 * See SkM44.h for more details.
 */
export interface Matrix4x4Helpers {
    /**
     * Returns a new identity 4x4 matrix.
     */
    identity(): number[];

    /**
     * Returns the inverse of the given 4x4 matrix or null if it is not invertible.
     * @param matrix
     */
    invert(matrix: Matrix4x4 | number[]): number[] | null;

    /**
     * Return a new 4x4 matrix representing a camera at eyeVec, pointed at centerVec.
     * @param eyeVec
     * @param centerVec
     * @param upVec
     */
    lookat(eyeVec: Vector3, centerVec: Vector3, upVec: Vector3): number[];

    /**
     * Multiplies the provided 4x4 matrices together from left to right.
     * @param matrices
     */
    multiply(...matrices: Array<(Matrix4x4 | number[])>): number[];

    /**
     * Returns the inverse of the given 4x4 matrix or throws if it is not invertible.
     * @param matrix
     */
    mustInvert(matrix: Matrix4x4 | number[]): number[];

    /**
     * Returns a new 4x4 matrix representing a perspective.
     * @param near
     * @param far
     * @param radians
     */
    perspective(near: number, far: number, radians: AngleInRadians): number[];

    /**
     * Returns the value at the specified row and column of the given 4x4 matrix.
     * @param matrix
     * @param row
     * @param col
     */
    rc(matrix: Matrix4x4 | number[], row: number, col: number): number;

    /**
     * Returns a new 4x4 matrix representing a rotation around the provided vector.
     * @param axis
     * @param radians
     */
    rotated(axis: Vector3, radians: AngleInRadians): number[];

    /**
     * Returns a new 4x4 matrix representing a rotation around the provided vector.
     * Rotation is provided redundantly as both sin and cos values.
     * This rotate can be used when you already have the cosAngle and sinAngle values
     * so you don't have to atan(cos/sin) to call roatated() which expects an angle in radians.
     * This does no checking! Behavior for invalid sin or cos values or non-normalized axis vectors
     * is incorrect. Prefer rotated().
     * @param axis
     * @param sinAngle
     * @param cosAngle
     */
    rotatedUnitSinCos(axis: Vector3, sinAngle: number, cosAngle: number): number[];

    /**
     * Returns a new 4x4 matrix representing a scale by the provided vector.
     * @param vec
     */
    scaled(vec: Vector3): number[];

    /**
     * Returns a new 4x4 matrix that sets up a 3D perspective view from a given camera.
     * @param area - describes the viewport. (0, 0, canvas_width, canvas_height) suggested.
     * @param zScale - describes the scale of the z axis. min(width, height)/2 suggested
     * @param cam
     */
    setupCamera(area: InputRect, zScale: number, cam: Camera): number[];

    /**
     * Returns a new 4x4 matrix representing a translation by the provided vector.
     * @param vec
     */
    translated(vec: Vector3): number[];

    /**
     * Returns a new 4x4 matrix that is the transpose of this 4x4 matrix.
     * @param matrix
     */
    transpose(matrix: Matrix4x4 | number[]): number[];
}

export interface ParagraphBuilderFactory {
    /**
     * Creates a ParagraphBuilder using the fonts available from the given font manager.
     * @param style
     * @param fontManager
     */
    Make(style: ParagraphStyle, fontManager: SkFontMgr): ParagraphBuilder;

    /**
     * Creates a ParagraphBuilder using the fonts available from the given font provider.
     * @param style
     * @param fontSrc
     */
    MakeFromFontProvider(style: ParagraphStyle, fontSrc: TypefaceFontProvider): ParagraphBuilder;
}

export interface ParagraphStyleConstructor {
    /**
     * Fills out all optional fields with defaults. The emscripten bindings complain if there
     * is a field undefined and it was expecting a float (for example).
     * @param ps
     */
    new(ps: ParagraphStyle): ParagraphStyle;
}

/**
 * This class is an abstraction around SkShaper.h
 */
export interface ShapedTextConstructor {
    /**
     * Return a ShapedText from the given options. See SkShaper.h for more.
     * @param opts
     */
    new (opts: ShapedTextOpts): ShapedText;
}

/**
 * See SkColorFilter.h for more.
 */
export interface SkColorFilterFactory {
    /**
     * Makes a color filter with the given color and blend mode.
     * @param color
     * @param mode
     */
    MakeBlend(color: InputColor, mode: BlendMode): SkColorFilter;

    /**
     * Makes a color filter composing two color filters.
     * @param outer
     * @param inner
     */
    MakeCompose(outer: SkColorFilter, inner: SkColorFilter): SkColorFilter;

    /**
     * Makes a color filter that is linearly interpolated between two other color filters.
     * @param t - a float in the range of 0.0 to 1.0.
     * @param dst
     * @param src
     */
    MakeLerp(t: number, dst: SkColorFilter, src: SkColorFilter): SkColorFilter;

    /**
     * Makes a color filter that converts between linear colors and sRGB colors.
     */
    MakeLinearToSRGBGamma(): SkColorFilter;

    /**
     * Creates a color filter using the provided color matrix.
     * @param cMatrix
     */
    MakeMatrix(cMatrix: InputColorMatrix): SkColorFilter;

    /**
     * Makes a color filter that converts between sRGB colors and linear colors.
     */
    MakeSRGBToLinearGamma(): SkColorFilter;
}

export interface SkContourMeasureIterConstructor {
    /**
     * Creates an SkContourMeasureIter with the given path.
     * @param path
     * @param forceClosed - if path should be forced close before measuring it.
     * @param resScale - controls the precision of the measure. values > 1 increase the
     *                   precision (and possibly slow down the computation).
     */
    new (path: SkPath, forceClosed: boolean, resScale: number): SkContourMeasureIter;
}

/**
 * See SkFont.h for more.
 */
export interface SkFontConstructor extends DefaultConstructor<SkFont> {
    /**
     * Constructs SkFont with default values with SkTypeface.
     * @param face
     * @param size - font size in points. If not specified, uses a default value.
     */
    new (face: SkTypeface | null, size?: number): SkFont;

    /**
     * Constructs SkFont with default values with SkTypeface and size in points,
     * horizontal scale, and horizontal skew. Horizontal scale emulates condensed
     * and expanded fonts. Horizontal skew emulates oblique fonts.
     * @param face
     * @param size
     * @param scaleX
     * @param skewX
     */
    new (face: SkTypeface | null, size: number, scaleX: number, skewX: number): SkFont;
}

export interface SkFontMgrFactory {
    /**
     * Create an SkFontMgr with the created font data. Returns null if buffers was empty.
     * @param buffers
     */
    FromData(...buffers: ArrayBuffer[]): SkFontMgr | null;

    /**
     * Return the default SkFontMgr. This will generally have 0 or 1 fonts in it, depending on if
     * the demo monospace font was compiled in.
     */
    RefDefault(): SkFontMgr;
}

/**
 * See effects/SkImageFilters.h for more.
 */
export interface SkImageFilterFactory {
    /**
     * Create a filter that blurs its input by the separate X and Y sigmas. The provided tile mode
     * is used when the blur kernel goes outside the input image.
     *
     * @param sigmaX - The Gaussian sigma value for blurring along the X axis.
     * @param sigmaY - The Gaussian sigma value for blurring along the Y axis.
     * @param mode
     * @param input - if null, it will use the dynamic source image (e.g. a saved layer)
     */
    MakeBlur(sigmaX: number, sigmaY: number, mode: TileMode,
             input: SkImageFilter | null): SkImageFilter;

    /**
     * Create a filter that applies the color filter to the input filter results.
     * @param cf
     * @param input - if null, it will use the dynamic source image (e.g. a saved layer)
     */
    MakeColorFilter(cf: SkColorFilter, input: SkImageFilter | null): SkImageFilter;

    /**
     * Create a filter that composes 'inner' with 'outer', such that the results of 'inner' are
     * treated as the source bitmap passed to 'outer'.
     * If either param is null, the other param will be returned.
     * @param outer
     * @param inner - if null, it will use the dynamic source image (e.g. a saved layer)
     */
    MakeCompose(outer: SkImageFilter | null, inner: SkImageFilter | null): SkImageFilter;

    /**
     * Create a filter that transforms the input image by 'matrix'. This matrix transforms the
     * local space, which means it effectively happens prior to any transformation coming from the
     * SkCanvas initiating the filtering.
     * @param matr
     * @param fq
     * @param input - if null, it will use the dynamic source image (e.g. a saved layer)
     */
    MakeMatrixTransform(matr: InputMatrix, fq: FilterQuality,
                        input: SkImageFilter | null): SkImageFilter;
}

/**
 * See SkMaskFilter.h for more details.
 */
export interface SkMaskFilterFactory {
    /**
     * Create a blur maskfilter
     * @param style
     * @param sigma - Standard deviation of the Gaussian blur to apply. Must be > 0.
     * @param respectCTM - if true the blur's sigma is modified by the CTM.
     */
    MakeBlur(style: BlurStyle, sigma: number, respectCTM: boolean): SkMaskFilter;
}

/**
 * Contains the ways to create an SkPath.
 */
export interface SkPathConstructorAndFactory extends DefaultConstructor<SkPath> {
    /**
     * Creates a new path from the given list of path commands.
     * @param cmds
     */
    MakeFromCmds(cmds: PathCommand[]): SkPath;

    /**
     * Creates a new path using the provided verbs and associated points and weights. The process
     * reads the first verb from verbs and then the appropriate number of points from the
     * FlattenedPointArray (e.g. 2 points for moveTo, 4 points for quadTo, etc). If the verb is
     * a conic, a weight will be read from the WeightList.
     * If the data is malformed (e.g. not enough points), the resulting path will be incomplete.
     * @param verbs - the verbs that create this path, in the order of being drawn.
     * @param points - represents n points with 2n floats.
     * @param weights - used if any of the verbs are conics, can be omitted otherwise.
     */
    MakeFromVerbsPointsWeights(verbs: VerbList, points: InputFlattenedPointArray,
                               weights?: WeightList): SkPath;
}

/**
 * See SkPathEffect.h for more details.
 */
export interface SkPathEffectFactory {
    /**
     * Returns a PathEffect that can turn sharp corners into rounded corners.
     * @param radius - if <=0, returns null
     */
    MakeCorner(radius: number): SkPathEffect | null;

    /**
     * Returns a PathEffect that add dashes to the path.
     *
     * See SkDashPathEffect.h for more details.
     *
     * @param intervals - even number of entries with even indicies specifying the length of
     *                    the "on" intervals, and the odd indices specifying the length of "off".
     * @param phase - offset length into the intervals array. Defaults to 0.
     */
    MakeDash(intervals: number[], phase?: number): SkPathEffect;

    /**
     * Returns a PathEffect that breaks path into segments of segLength length, and randomly move
     * the endpoints away from the original path by a maximum of deviation.
     * @param segLength - length of the subsegments.
     * @param dev - limit of the movement of the endpoints.
     * @param seedAssist - modifies the randomness. See SkDiscretePathEffect.h for more.
     */
    MakeDiscrete(segLength: number, dev: number, seedAssist: number): SkPathEffect;
}

/**
 * See SkRuntimeEffect.h for more details.
 */
export interface SkRuntimeEffectFactory {
    /**
     * Compiles a SkRuntimeEffect from the given shader code.
     * @param sksl - Source code for a shader written in SkSL
     */
    Make(sksl: string): SkRuntimeEffect | null;
}

/**
 * For more information, see SkShaders.h.
 * TODO(kjlubick) Rename these to Make* as per the convention
 */
export interface SkShaderFactory {
    /**
     * Returns a shader that combines the given shaders with a BlendMode.
     * @param mode
     * @param one
     * @param two
     */
    Blend(mode: BlendMode, one: SkShader, two: SkShader): SkShader;

    /**
     * Returns a shader with a given color and colorspace.
     * @param color
     * @param space
     */
    Color(color: InputColor, space: ColorSpace): SkShader;

    /**
     * Returns a shader is a linear interpolation combines the given shaders with a BlendMode.
     * @param t - range of [0.0, 1.0], indicating how far we should be between one and two.
     * @param one
     * @param two
     */
    Lerp(t: number, one: SkShader, two: SkShader): SkShader;
}

/**
 * See SkTextBlob.h for more details.
 */
export interface SkTextBlobFactory {
    /**
     * Return a TextBlob with a single run of text.
     *
     * It does not perform typeface fallback for characters not found in the SkTypeface.
     * It does not perform kerning or other complex shaping; glyphs are positioned based on their
     * default advances.
     * @param glyphs - if using Malloc'd array, be sure to use CanvasKit.MallocGlyphIDs().
     * @param font
     */
    MakeFromGlyphs(glyphs: InputGlyphIDArray, font: SkFont): SkTextBlob;

    /**
     * Returns a TextBlob built from a single run of text with rotation, scale, and translations.
     *
     * It uses the default character-to-glyph mapping from the typeface in the font.
     * @param str
     * @param rsxforms
     * @param font
     */
    MakeFromRSXform(str: string, rsxforms: InputFlattenedRSXFormArray, font: SkFont): SkTextBlob;

    /**
     * Returns a TextBlob built from a single run of text with rotation, scale, and translations.
     *
     * @param glyphs - if using Malloc'd array, be sure to use CanvasKit.MallocGlyphIDs().
     * @param rsxforms
     * @param font
     */
    MakeFromRSXformGlyphs(glyphs: InputGlyphIDArray, rsxforms: InputFlattenedRSXFormArray,
                          font: SkFont): SkTextBlob;

    /**
     * Return a TextBlob with a single run of text.
     *
     * It uses the default character-to-glyph mapping from the typeface in the font.
     * It does not perform typeface fallback for characters not found in the SkTypeface.
     * It does not perform kerning or other complex shaping; glyphs are positioned based on their
     * default advances.
     * @param str
     * @param font
     */
    MakeFromText(str: string, font: SkFont): SkTextBlob;

    /**
     * Returns a TextBlob that has the glyphs following the contours of the given path.
     *
     * It is a convenience wrapper around MakeFromRSXform and SkContourMeasureIter.
     * @param str
     * @param path
     * @param font
     * @param initialOffset - the length in pixels to start along the path.
     */
    MakeOnPath(str: string, path: SkPath, font: SkFont, initialOffset?: number): SkTextBlob;
}

export interface TextStyleConstructor {
    /**
     * Fills out all optional fields with defaults. The emscripten bindings complain if there
     * is a field undefined and it was expecting a float (for example).
     * @param ts
     */
    new(ts: TextStyle): TextStyle;
}

export interface TypefaceFontProviderFactory {
    /**
     * Return an empty TypefaceFontProvider
     */
    Make(): TypefaceFontProvider;
}

/**
 * Functions for manipulating vectors. It is Loosely based off of SkV3 in SkM44.h but Skia
 * also has SkVec2 and Skv4. This combines them and works on vectors of any length.
 */
export interface VectorHelpers {
    /**
     * Adds 2 vectors together, term by term, returning a new Vector.
     * @param a
     * @param b
     */
    add(a: VectorN, b: VectorN): VectorN;

    /**
     * Returns the cross product of the two vectors. Only works for length 3.
     * @param a
     * @param b
     */
    cross(a: Vector3, b: Vector3): Vector3;

    /**
     * Returns the length(sub(a, b))
     * @param a
     * @param b
     */
    dist(a: VectorN, b: VectorN): number;

    /**
     * Returns the dot product of the two vectors.
     * @param a
     * @param b
     */
    dot(a: VectorN, b: VectorN): number;

    /**
     * Returns the length of this vector, which is always positive.
     * @param v
     */
    length(v: VectorN): number;

    /**
     * Returns the length squared of this vector.
     * @param v
     */
    lengthSquared(v: VectorN): number;

    /**
     * Returns a new vector which is v multiplied by the scalar s.
     * @param v
     * @param s
     */
    mulScalar(v: VectorN, s: number): VectorN;

    /**
     * Returns a normalized vector.
     * @param v
     */
    normalize(v: VectorN): VectorN;

    /**
     * Subtracts vector b from vector a (termwise).
     * @param a
     * @param b
     */
    sub(a: VectorN, b: VectorN): VectorN;
}

/**
 * A PosTan is an array of 4 values, representing a position and a tangent vector. In order, the
 * values are [px, py, tx, ty].
 */
export type PosTan = number[];
/**
 * An SkColor is represented by 4 floats, typically with values between 0 and 1.0. In order,
 * the floats correspond to red, green, blue, alpha.
 */
export type SkColor = Float32Array;
export type SkColorInt = number; // deprecated, prefer SkColor
/**
 * An SkColorMatrix is a 4x4 color matrix that transforms the 4 color channels
 * with a 1x4 matrix that post-translates those 4 channels.
 * For example, the following is the layout with the scale (S) and post-transform
 * (PT) items indicated.
 * RS,  0,  0,  0 | RPT
 *  0, GS,  0,  0 | GPT
 *  0,  0, BS,  0 | BPT
 *  0,  0,  0, AS | APT
 */
export type SkColorMatrix = Float32Array;
/**
 * An SkIRect is represented by 4 ints. In order, the ints correspond to left, top,
 * right, bottom. See SkRect.h for more
 */
export type SkIRect = Int32Array;
/**
 * An SkPoint is represented by 2 floats: (x, y).
 */
export type SkPoint = number[];
/**
 * An SkRect is represented by 4 floats. In order, the floats correspond to left, top,
 * right, bottom. See SkRect.h for more
 */
export type SkRect = Float32Array;
/**
 * An SkRRect (rectangle with rounded corners) is represented by 12 floats. In order, the floats
 * correspond to left, top, right, bottom and then in pairs, the radiusX, radiusY for upper-left,
 * upper-right, lower-right, lower-left. See SkRRect.h for more.
 */
export type SkRRect = Float32Array;

export type WebGLContextHandle = number;
export type AngleInDegrees = number;
export type AngleInRadians = number;
export type SaveLayerFlag = number;

export type TypedArrayConstructor = Float32ArrayConstructor | Int32ArrayConstructor |
    Int16ArrayConstructor | Int8ArrayConstructor | Uint32ArrayConstructor |
    Uint16ArrayConstructor | Uint8ArrayConstructor;
export type TypedArray = Float32Array | Int32Array | Int16Array | Int8Array | Uint32Array |
    Uint16Array | Uint8Array;

export type ColorIntArray = MallocObj | Uint32Array | number[];
/**
 * FlattenedPointArray represents n points by 2*n float values. In order, the values should
 * be the x, y for each point.
 */
export type FlattenedPointArray = Float32Array;
/**
 * FlattenedRectangleArray represents n rectangles by 4*n float values. In order, the values should
 * be the top, left, right, bottom point for each rectangle.
 */
export type FlattenedRectangleArray = Float32Array;
/**
 * Regardless of the format we use internally for GlyphID (16 bit unsigned atm), we expose them
 * as 32 bit unsigned.
 */
export type GlyphIDArray = Uint32Array;
/**
 * PathCommand contains a verb and then any arguments needed to fulfill that path verb.
 * Examples:
 *   [CanvasKit.MOVE_VERB, 0, 10]
 *   [CanvasKit.LINE_VERB, 30, 40]
 * TODO(kjlubick) Make this not be a 2-d array and support typed arrays.
 */
export type PathCommand = number[];
/**
 * VerbList holds verb constants like CanvasKit.MOVE_VERB, CanvasKit.CUBIC_VERB.
 */
export type VerbList = MallocObj | Uint8Array | number[];
/**
 * WeightList holds weights for conics when making paths.
 */
export type WeightList = MallocObj | Float32Array | number[];

export type Matrix4x4 = Float32Array;
export type Matrix3x3 = Float32Array;
export type Matrix3x2 = Float32Array;
/**
 * Vector3 represents an x, y, z coordinate or vector. It has length 3.
 */
export type Vector3 = number[]; // TODO(kjlubick) make this include typed array and malloc'd.

/**
 * VectorN represents a vector of length n.
 */
export type VectorN = number[];

/**
 * CanvasKit APIs accept normal arrays, typed arrays, or Malloc'd memory as colors.
 * Length 4.
 */
export type InputColor = MallocObj | SkColor | number[];
/**
 * CanvasKit APIs accept normal arrays, typed arrays, or Malloc'd memory as color matrices.
 * Length 20.
 */
export type InputColorMatrix = MallocObj | SkColorMatrix | number[];
/**
 * CanvasKit APIs accept normal arrays, typed arrays, or Malloc'd memory as glyph IDs.
 * Length n for n glyph IDs.
 */
export type InputGlyphIDArray = MallocObj | GlyphIDArray | number[];
/**
 * CanvasKit APIs accept normal arrays, typed arrays, or Malloc'd memory as flattened points.
 * Length 2 * n for n points.
 */
export type InputFlattenedPointArray = MallocObj | FlattenedPointArray | number[];
/**
 * CanvasKit APIs accept normal arrays, typed arrays, or Malloc'd memory as flattened rectangles.
 * Length 4 * n for n rectangles.
 */
export type InputFlattenedRectangleArray = MallocObj | FlattenedRectangleArray | number[];
/**
 * CanvasKit APIs accept all of these matrix types. Under the hood, we generally use 4x4 matrices.
 */
export type InputMatrix = MallocObj | Matrix4x4 | Matrix3x3 | Matrix3x2 | DOMMatrix | number[];
/**
 * CanvasKit APIs accept normal arrays, typed arrays, or Malloc'd memory as rectangles.
 * Length 4.
 */
export type InputRect = MallocObj | SkRect | number[];
/**
 * CanvasKit APIs accept normal arrays, typed arrays, or Malloc'd memory as (int) rectangles.
 * Length 4.
 */
export type InputIRect = MallocObj | SkIRect | number[];
/**
 * CanvasKit APIs accept normal arrays, typed arrays, or Malloc'd memory as rectangles with
 * rounded corners. Length 12.
 */
export type InputRRect = MallocObj | SkRRect | number[];
/**
 * This represents n RSXforms by 4*n float values. In order, the values should
 * be scos, ssin, tx, ty for each RSXForm. See RSXForm.h for more details.
 */
export type InputFlattenedRSXFormArray = MallocObj | Float32Array | number[];

export type AlphaType = EmbindEnumEntity;
export type BlendMode = EmbindEnumEntity;
export type BlurStyle = EmbindEnumEntity;
export type ClipOp = EmbindEnumEntity;
export type ColorSpace = EmbindSingleton;
export type ColorType = EmbindEnumEntity;
export type EncodedImageFormat = EmbindEnumEntity;
export type FillType = EmbindEnumEntity;
export type FilterQuality = EmbindEnumEntity;
export type FontEdging = EmbindEnumEntity;
export type FontHinting = EmbindEnumEntity;
export type PathOp = EmbindEnumEntity;
export type PaintStyle = EmbindEnumEntity;
export type PointMode = EmbindEnumEntity;
export type StrokeCap = EmbindEnumEntity;
export type StrokeJoin = EmbindEnumEntity;
export type TileMode = EmbindEnumEntity;
export type VertexMode = EmbindEnumEntity;

export type Affinity = EmbindEnumEntity;
export type DecorationStyle = EmbindEnumEntity;
export type FontSlant = EmbindEnumEntity;
export type FontWeight = EmbindEnumEntity;
export type FontWidth = EmbindEnumEntity;
export type PlaceholderAlignment = EmbindEnumEntity;
export type RectHeightStyle = EmbindEnumEntity;
export type RectWidthStyle = EmbindEnumEntity;
export type TextAlign = EmbindEnumEntity;
export type TextBaseline = EmbindEnumEntity;
export type TextDirection = EmbindEnumEntity;

export interface AffinityEnumValues extends EmbindEnum {
    Upstream: Affinity;
    Downstream: Affinity;
}

export interface AlphaTypeEnumValues extends EmbindEnum {
    Opaque: AlphaType;
    Premul: AlphaType;
    Unpremul: AlphaType;
}

export interface BlendModeEnumValues extends EmbindEnum {
    Clear: BlendMode;
    Src: BlendMode;
    Dst: BlendMode;
    SrcOver: BlendMode;
    DstOver: BlendMode;
    SrcIn: BlendMode;
    DstIn: BlendMode;
    SrcOut: BlendMode;
    DstOut: BlendMode;
    SrcATop: BlendMode;
    DstATop: BlendMode;
    Xor: BlendMode;
    Plus: BlendMode;
    Modulate: BlendMode;
    Screen: BlendMode;
    Overlay: BlendMode;
    Darken: BlendMode;
    Lighten: BlendMode;
    ColorDodge: BlendMode;
    ColorBurn: BlendMode;
    HardLight: BlendMode;
    SoftLight: BlendMode;
    Difference: BlendMode;
    Exclusion: BlendMode;
    Multiply: BlendMode;
    Hue: BlendMode;
    Saturation: BlendMode;
    Color: BlendMode;
    Luminosity: BlendMode;
}

export interface BlurStyleEnumValues extends EmbindEnum {
    Normal: BlurStyle;
    Solid: BlurStyle;
    Outer: BlurStyle;
    Inner: BlurStyle;
}

export interface ClipOpEnumValues extends EmbindEnum {
    Difference: ClipOp;
    Intersect: ClipOp;
}

/**
 * The currently supported color spaces. These are all singleton values.
 */
export interface ColorSpaceEnumValues { // not a typical enum, but effectively like one.
    readonly SRGB: ColorSpace;
    readonly DISPLAY_P3: ColorSpace;
    readonly ADOBE_RGB: ColorSpace;
}

export interface ColorTypeEnumValues extends EmbindEnum {
    Alpha_8: ColorType;
    RGB_565: ColorType;
    RGBA_8888: ColorType;
    BGRA_8888: ColorType;
    RGBA_1010102: ColorType;
    RGB_101010x: ColorType;
    Gray_8: ColorType;
    RGBA_F16: ColorType;
    RGBA_F32: ColorType;
}

export interface DecorationStyleEnumValues extends EmbindEnum {
    Solid: DecorationStyle;
    Double: DecorationStyle;
    Dotted: DecorationStyle;
    Dashed: DecorationStyle;
    Wavy: DecorationStyle;
}

export interface FillTypeEnumValues extends EmbindEnum {
    Winding: FillType;
    EvenOdd: FillType;
}

export interface FilterQualityEnumValues extends EmbindEnum {
    None: FilterQuality;
    Low: FilterQuality;
    Medium: FilterQuality;
    High: FilterQuality;
}

export interface FontEdgingEnumValues extends EmbindEnum {
    Alias: FontEdging;
    AntiAlias: FontEdging;
    SubpixelAntiAlias: FontEdging;
}

export interface FontHintingEnumValues extends EmbindEnum {
    None: FontHinting;
    Slight: FontHinting;
    Normal: FontHinting;
    Full: FontHinting;
}

export interface FontSlantEnumValues extends EmbindEnum {
    Upright: FontSlant;
    Italic: FontSlant;
    Oblique: FontSlant;
}

export interface FontWeightEnumValues extends EmbindEnum {
    Invisible: FontWeight;
    Thin: FontWeight;
    ExtraLight: FontWeight;
    Light: FontWeight;
    Normal: FontWeight;
    Medium: FontWeight;
    SemiBold: FontWeight;
    Bold: FontWeight;
    ExtraBold: FontWeight;
    Black: FontWeight;
    ExtraBlack: FontWeight;
}

export interface FontWidthEnumValues extends EmbindEnum {
    UltraCondensed: FontWidth;
    ExtraCondensed: FontWidth;
    Condensed: FontWidth;
    SemiCondensed: FontWidth;
    Normal: FontWidth;
    SemiExpanded: FontWidth;
    Expanded: FontWidth;
    ExtraExpanded: FontWidth;
    UltraExpanded: FontWidth;
}

export interface ImageFormatEnumValues extends EmbindEnum {
    // TODO(kjlubick) When these are compiled in depending on the availability of the codecs,
    //   be sure to make these nullable.
    PNG: EncodedImageFormat;
    JPEG: EncodedImageFormat;
    WEBP: EncodedImageFormat;
}

export interface PaintStyleEnumValues extends EmbindEnum {
    Fill: PaintStyle;
    Stroke: PaintStyle;
}

export interface PathOpEnumValues extends EmbindEnum {
    Difference: PathOp;
    Intersect: PathOp;
    Union: PathOp;
    XOR: PathOp;
    ReverseDifference: PathOp;
}

export interface PlaceholderAlignmentEnumValues extends EmbindEnum {
    Baseline: PlaceholderAlignment;
    AboveBaseline: PlaceholderAlignment;
    BelowBaseline: PlaceholderAlignment;
    Top: PlaceholderAlignment;
    Bottom: PlaceholderAlignment;
    Middle: PlaceholderAlignment;
}

export interface PointModeEnumValues extends EmbindEnum {
    Points: PointMode;
    Lines: PointMode;
    Polygon: PointMode;
}

export interface RectHeightStyleEnumValues extends EmbindEnum {
    Tight: RectHeightStyle;
    Max: RectHeightStyle;
    IncludeLineSpacingMiddle: RectHeightStyle;
    IncludeLineSpacingTop: RectHeightStyle;
    IncludeLineSpacingBottom: RectHeightStyle;
}

export interface RectWidthStyleEnumValues extends EmbindEnum {
    Tight: RectWidthStyle;
    Max: RectWidthStyle;
}

export interface StrokeCapEnumValues extends EmbindEnum {
    Butt: StrokeCap;
    Round: StrokeCap;
    Square: StrokeCap;
}

export interface StrokeJoinEnumValues extends EmbindEnum {
    Bevel: StrokeJoin;
    Miter: StrokeJoin;
    Round: StrokeJoin;
}

export interface TextAlignEnumValues extends EmbindEnum {
    Left: TextAlign;
    Right: TextAlign;
    Center: TextAlign;
    Justify: TextAlign;
    Start: TextAlign;
    End: TextAlign;
}

export interface TextBaselineEnumValues extends EmbindEnum {
    Alphabetic: TextBaseline;
    Ideographic: TextBaseline;
}

export interface TextDirectionEnumValues extends EmbindEnum {
    LTR: TextDirection;
    RTL: TextDirection;
}

export interface TileModeEnumValues extends EmbindEnum {
    Clamp: TileMode;
    Decal: TileMode;
    Mirror: TileMode;
    Repeat: TileMode;
}

export interface VertexModeEnumValues extends EmbindEnum {
    Triangles: VertexMode;
    TrianglesStrip: VertexMode;
    TriangleFan: VertexMode;
}
