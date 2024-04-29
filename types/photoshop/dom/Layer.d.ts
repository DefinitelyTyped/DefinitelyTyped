import * as Unit from "../util/unit";
import { Layers } from "./collections/Layers";
import * as Constants from "./Constants";
import { Document } from "./Document";
import { Bounds } from "./objects/Bounds";
import { TextItem } from "./TextItem";
import { ApplyImageOptions } from "./types/ApplyImageTypes";
/** @ignore */
export declare enum PSLayerKind {
    any = 0,
    pixel = 1,
    adjustment = 2,
    text = 3,
    vector = 4,
    smartObject = 5,
    video = 6,
    group = 7,
    threeD = 8,
    gradient = 9,
    pattern = 10,
    solidColor = 11,
    background = 12,
    groupEnd = 13,
}
/**
 * An object within a document that contains visual elements of the image, equivalent to a layer in Photoshop.
 *
 * You can access layers in a document using [[Document.layers]] collection.
 *
 * If the object is representing a group layer, you can access it's children layers using [[Layer.layers]] property.
 * ```javascript
 * group.layers.forEach((layer) => {
 *   layer.visible = true;
 * })
 * ```
 */
export declare class Layer {
    /**
     * @ignore
     */
    private setLocking;
    /**
     * The class name of the referenced object: *"Layer"*.
     * @minVersion 23.0
     */
    get typename(): "Layer";
    /**
     * True if any property of this layer is locked.
     * @minVersion 22.5
     */
    get locked(): boolean;
    /**
     * When set to true, prevents edits to pixels and properties of this layer.
     * @minVersion 22.5
     */
    get allLocked(): boolean;
    set allLocked(locking: boolean);
    /**
     * When set to true, prevents the pixels of this layer from being edited.
     * @minVersion 22.5
     */
    get pixelsLocked(): boolean;
    set pixelsLocked(locking: boolean);
    /**
     * When set to true, prevents the layer from being moved.
     * @minVersion 22.5
     */
    get positionLocked(): boolean;
    set positionLocked(locking: boolean);
    /**
     * When set to true, prevents the transparent pixels from being edited
     * @minVersion 22.5
     */
    get transparentPixelsLocked(): boolean;
    set transparentPixelsLocked(locking: boolean);
    /**
     * True when the layer is the special Background layer.
     * @minVersion 22.5
     */
    get isBackgroundLayer(): boolean;
    /**
     * True when the layer is visible.
     * @minVersion 22.5
     */
    get visible(): boolean;
    set visible(visible: boolean);
    /**
     * The kind of the layer.
     * @minVersion 22.5
     */
    get kind(): Constants.LayerKind;
    /**
     * Bounds of the layer, including the effects.
     * @minVersion 22.5
     */
    get bounds(): Bounds;
    /**
     * Bounds of the layer excluding effects.
     * @minVersion 22.5
     */
    get boundsNoEffects(): Bounds;
    /**
     * The master opacity of the layer, in percent.
     * @minVersion 22.5
     */
    get opacity(): number;
    set opacity(opacity: number);
    /**
     * The fill opacity of the layer, in percentage.
     * @minVersion 23.0
     */
    get fillOpacity(): number;
    set fillOpacity(opacity: number);
    /**
     * The density of the filter mask, in percentage.
     * @minVersion 23.0
     */
    get filterMaskDensity(): number;
    set filterMaskDensity(density: number);
    /**
     * The feather of the filter mask between 0.0 and 1000.0.
     * @minVersion 23.0
     */
    get filterMaskFeather(): number;
    set filterMaskFeather(feather: number);
    /**
     * The density of the layer mask, in percentage.
     * @minVersion 23.0
     */
    get layerMaskDensity(): number;
    set layerMaskDensity(density: number);
    /**
     * The feather of the layer mask between 0.0 and 1000.0.
     * @minVersion 23.0
     */
    get layerMaskFeather(): number;
    set layerMaskFeather(feather: number);
    /**
     * The density of the vector mask, in percentage.
     * @minVersion 23.0
     */
    get vectorMaskDensity(): number;
    set vectorMaskDensity(density: number);
    /**
     * The feather of the vector mask between 0.0 and 1000.0.
     * @minVersion 23.0
     */
    get vectorMaskFeather(): number;
    set vectorMaskFeather(feather: number);
    /**
     * Whether the layer is being used as a clipping mask.
     * @minVersion 23.0
     */
    get isClippingMask(): boolean;
    set isClippingMask(clipped: boolean);
    /**
     * The blend mode of the layer.
     *
     * ***Fixes in Photoshop 24.2:***
     * - *Now it will throw error when passing non-existent blend mode*
     * - *Also will throw error if combination of document color mode, bit depth and blend mode is not possible
     * instead of failing silently*
     * - *Prior this version it was possible to set blend mode for background layer which turned it into regular
     * layer as a side effect and also changed its ID. Not it will throw error instead since these side effects
     * are not expected to happen*
     * @minVersion 22.5
     */
    get blendMode(): Constants.BlendMode;
    set blendMode(blendMode: Constants.BlendMode);
    /**
     * Layers linked to this layer. See [[Layer.link]]
     * @minVersion 22.5
     */
    get linkedLayers(): Layers;
    /**
     * Name of the layer.
     * @minVersion 22.5
     */
    get name(): string;
    /**
     * @ignore
     * Set the name of the layer
     */
    set name(name: string);
    /**
     * ID of the layer, can be used for making batchPlay calls.
     * @minVersion 22.5
     */
    get id(): number;
    /**
     * The document that contains this layer.
     * @minVersion 23.0
     */
    get document(): Document;
    /**
     * The group layer that contains this layer.
     * It will return null if the layer is a top layer in the document.
     * @minVersion 22.5
     */
    get parent(): Layer | null;
    /**
     * @ignore
     * The selection status of the layer.
     * @minVersion 22.5
     */
    get selected(): boolean;
    set selected(select: boolean);
    /**
     * The object that contains properties and methods related to Text
     * for Layers whose `kind` is equal to `LayerKind.TEXT`
     * @minVersion 24.2
     */
    get textItem(): TextItem;
    /**
     * @ignore
     * We use ID to reference layers internally
     */
    private readonly _id;
    /**
     * @ignore
     * We use ID to reference the layer's document internally
     */
    readonly _docId: number;
    /**
     * @ignore
     */
    constructor(id: number, docId: number);
    /**
     * Applies the Add Noise filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param amount Percentage of noise applied [0.1,400].
     * @param distribution Distribution method to use.
     * @param monochromatic Adds black and white noise if true.
     * @async
     */
    applyAddNoise(amount: number, distribution: Constants.NoiseDistribution, monochromatic: boolean): Promise<void>;
    /**
     * Applies the Average filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @async
     */
    applyAverage(): Promise<void>;
    /**
     * Applies the Blur filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @async
     */
    applyBlur(): Promise<void>;
    /**
     * Applies the Blur More filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @async
     */
    applyBlurMore(): Promise<void>;
    /**
     * Applies the Clouds filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @async
     */
    applyClouds(): Promise<void>;
    /**
     * Applies the Custom filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param characteristics Square matrix (5 x 5) used to perform filter operation.
     * @param scale The value by which to divide the sum of the pixel values included in the calculation
     * @param offset The value to be added to the result of the scale calculation.
     * @async
     */
    applyCustomFilter(characteristics: number[], scale: number, offset: number): Promise<void>;
    /**
     * Applies the De-Interlace filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap, CMYK 8 bits, CMYK 16 bits, Duotone 8 bits
     *
     * @minVersion 23.5
     * @param eliminateFields Eliminate EVENFIELDS or ODDFIELDS field order.
     * @param createFields Create fields by either DUPLICATION or INTERPOLATION.
     * @async
     */
    applyDeInterlace(eliminateFields: Constants.EliminateFields, createFields: Constants.CreateFields): Promise<void>;
    /**
     * Applies the Despeckle filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits
     *
     * @minVersion 23.5
     * @async
     */
    applyDespeckle(): Promise<void>;
    /**
     * Applies the Difference Clouds filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap, Lab 8 bits, Lab 16 bits
     *
     * @minVersion 23.5
     * @async
     */
    applyDifferenceClouds(): Promise<void>;
    /**
     * Applies the Diffuse Glow filter.
     *
     * Supported color modes: RGB 8 bits, Duotone 8 bits, Grayscale 8 bits, Multichannel 8 bits
     *
     * @minVersion 23.5
     * @param graininess The amount of grain [0,10].
     * @param glowAmount The glow amount [0,20].
     * @param clearAmount The clear amount [0,20].
     * @async
     */
    applyDiffuseGlow(graininess: number, glowAmount: number, clearAmount: number): Promise<void>;
    /**
     * Applies the Displace filter using the specified horizontal
     * and vertical scale, mapping type, treatment of undistorted
     * areas, and path to the distortion image map.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param horizontalScale How much to scale in the direction of width [-999,999].
     * @param verticalScale How much to scale in the direction of height [-999,999].
     * @param displacementType Describes how the displacement map fits the
     * image if the image is not the same size as the map.
     * @param undefinedAreas The method used to treat undistorted areas
     * or areas left blank in an image to which the filter in the Distor
     * category has been applied.
     * @param displacementMapFile Path to the distortion image map.
     * @async
     */
    applyDisplace(
        horizontalScale: number,
        verticalScale: number,
        displacementType: Constants.DisplacementMapType,
        undefinedAreas: Constants.UndefinedAreas,
        displacementMapFile: File,
    ): Promise<void>;
    /**
     * Applies the Dust & Scratches filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits
     *
     * @minVersion 23.5
     * @param radius The radius of the filter in pixels [1,100].
     * @param threshold The lower the amount, the stronger the effect [0,255].
     * @async
     */
    applyDustAndScratches(radius: number, threshold: number): Promise<void>;
    /**
     * Applies the Gaussian Blur filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param radius The radius of the filter in pixels [0.1,250].
     * @async
     */
    applyGaussianBlur(radius: number): Promise<void>;
    /**
     * Applies the Glass filter.
     *
     * Supported color modes: RGB 8 bits, Duotone 8 bits, Grayscale 8 bits, Multichannel 8 bits
     *
     * @minVersion 23.5
     * @param distortion Change the amount the glass distorts the image [0,20].
     * @param smoothness Change the smoothness of the glass [1,15].
     * @param scaling The percentage value to scale by [50,200].
     * @param invert Invert the glass (default: false).
     * @param texture The type of glass texture.
     * This argument is ignored if "textureFile" is provided. (default: TextureType.CANVAS)
     * @param textureFile Mapping for glass distortion (optional).
     * @async
     */
    applyGlassEffect(
        distortion: number,
        smoothness: number,
        scaling: number,
        invert?: boolean,
        texture?: Constants.TextureType,
        textureFile?: File,
    ): Promise<void>;
    /**
     * Applies the High Pass filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param radius The width of high pass filter (pixels) [0.1,1000].
     * @async
     */
    applyHighPass(radius: number): Promise<void>;
    /**
     * Applies the Lens Blur filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits
     *
     * @minVersion 23.5
     * @param source The source for the depth map (default: `DepthMapSource.NONE`)
     * @param focalDistance The blur focal distance for the depth map [0,255] (default: `0`).
     * @param invertDepthMask True if the depth map is inverted (default: `false`)
     * @param shape The shape of the iris (default: `Geometry.HEXAGON`)
     * @param radius The radius of the iris [0,100] (default: 15)
     * @param bladeCurvature The blade curvature of the iris [0,100] (default: `0`)
     * @param rotation The rotation of the iris [0,360] (default: `0`)
     * @param brightness The brightness for the specular highlights [0,100] (default: `0`)
     * @param threshold The threshold for the specular highlights [0,255] (default: `0`)
     * @param amount The amount of noise [0,100] (default: `0`)
     * @param distribution The distribution value for the noise (default: `NoiseDistribution.UNIFORM`)
     * @param monochromatic True if the noise is monochromatic (default: `false`)
     * @async
     */
    applyLensBlur(
        source?: Constants.DepthMapSource,
        focalDistance?: number,
        invertDepthMask?: boolean,
        shape?: Constants.Geometry,
        radius?: number,
        bladeCurvature?: number,
        rotation?: number,
        brightness?: number,
        threshold?: number,
        amount?: number,
        distribution?: Constants.NoiseDistribution,
        monochromatic?: boolean,
    ): Promise<void>;
    /**
     * Applies the Lens Flare filter.
     *
     * Supported color modes: RGB 8 bits, RGB 16 bits, RGB 32 bits
     *
     * @minVersion 23.5
     * @param brightness Percentage of brightness applied [10,300].
     * @param flareCenter The flare center `{x: number, y: number}`.
     * @param flareCenter.x The horizontal coordinate in pixels.
     * @param flareCenter.y The vertical coordinate in pixels.
     * @param lensType The lens type used to produce the effect (default: `LensType.ZOOMLENS`).
     * @async
     */
    applyLensFlare(brightness: number, flareCenter: {
        x: number;
        y: number;
    }, lensType?: Constants.LensType): Promise<void>;
    /**
     * Applies the Maximum filter
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param radius The radius of the filter in pixels.<br/>
     *               Integer in the range [1,500] when using `SQUARENESS`.<br/>
     *               Float in the range [0.2,500] when using `ROUNDNESS`.<br/>
     * @param preserveShape Favor hard corners or smooth curves around the edges<br/>
     *                      (default: `PreserveShape.SQUARENESS`)
     */
    applyMaximum(radius: number, preserveShape?: Constants.PreserveShape): Promise<void>;
    /**
     * Applies the Minimum filter
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param radius The radius of the filter in pixels.<br/>
     *               Integer in the range [1,500] when using `SQUARENESS`.<br/>
     *               Float in the range [0.2,500] when using `ROUNDNESS`.<br/>
     * @param preserveShape Favor hard corners or smooth curves around the edges<br/>
     *                      (default: `PreserveShape.SQUARENESS`)
     */
    applyMinimum(radius: number, preserveShape?: Constants.PreserveShape): Promise<void>;
    /**
     * Applies the Median filter
     *
     * Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits
     *
     * @minVersion 23.5
     * @param radius The radius of the filter in pixels [1,500]
     */
    applyMedianNoise(radius: number): Promise<void>;
    /**
     * Applies the Motion Blur filter
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param angle The angle the blur effect will be applied at (degrees) [-360,360]
     * @param distance The amount of blur [1,2000]
     */
    applyMotionBlur(angle: number, distance: number): Promise<void>;
    /**
     * Applies the NTSC Colors filter
     *
     * Supported color modes: RGB 8 bits, RGB 16 bits, RGB 32 bits
     *
     * @minVersion 23.5
     */
    applyNTSC(): Promise<void>;
    /**
     * Applies the Ocean Ripple filter
     *
     * Supported color modes: RGB 8 bits, Duotone 8 bits, Grayscale 8 bits, Multichannel 8 bits
     *
     * @minVersion 23.5
     * @param size The Ripple size [1,15]
     * @param magnitude The Ripple magnitude [1,20]
     */
    applyOceanRipple(size: number, magnitude: number): Promise<void>;
    /**
     * Applies the Offset filter
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param horizontal The horizontal offset [-2 \* doc.width, 2 \* doc.width]
     * @param vertical The vertical offset [-2 \* doc.height, 2 \* doc.height]
     * @param undefinedAreas Method to use to fill the empty space left by the offset<br/>
     *                       (default: `OffsetUndefinedAreas.WRAPAROUND`).
     */
    applyOffset(horizontal: number, vertical: number, undefinedAreas?: Constants.OffsetUndefinedAreas): Promise<void>;
    /**
     * Applies the Twirl filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param angle The amount of twirl to apply (degrees) [-999,999]
     * @async
     */
    applyTwirl(angle: number): Promise<void>;
    /**
     * Applies the Pinch filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param amount The pinch amount. Negative value creates effect of expansion
     * and positive creates effect of contraction. [-100,100]
     * @async
     */
    applyPinch(amount: number): Promise<void>;
    /**
     * Applies the Polar Coordinates filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param conversion The conversion type.
     * @async
     */
    applyPolarCoordinates(conversion: Constants.PolarConversionType): Promise<void>;
    /**
     * Applies the Ripple filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param amount The ripple amount. [-999,999]
     * @param size The ripple size.
     * @async
     */
    applyRipple(amount: number, size: Constants.RippleSize): Promise<void>;
    /**
     * Applies the Sharpen filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @async
     */
    applySharpen(): Promise<void>;
    /**
     * Applies the Sharpen Edges filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits
     *
     * @minVersion 23.5
     * @async
     */
    applySharpenEdges(): Promise<void>;
    /**
     * Applies the Sharpen More filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @async
     */
    applySharpenMore(): Promise<void>;
    /**
     * Applies the the Shear filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @minVersion 23.5
     * @param curve Specification of the shear curve in points as coordinates object with x, y properties
     * e.g.in the format [{x:-20, y:1}, {x:30, y:128}]. Any number higher than 2 of coordinate objects can be specified.
     * For "x" coordinate it is recommended to use range [-63,64] and for "y" coordinate use range [1,128].
     * For bests results please make sure that first point has 0 at "y" axis and last point has 128 at "y" axis.
     * Also sort points by "y" value in ascending order. Follow these rules to ensure that curve will be shown correctly
     * in dialog UI.
     * @param undefinedArea The treatment of areas left blank by the distortion.
     * @async
     */
    applyShear(
        curve: Array<{
            x: number;
            y: number;
        }>,
        undefinedArea: Constants.UndefinedAreas,
    ): Promise<void>;
    /**
     * Applies the Smart Blur filter.
     *
     * Supported color modes: RGB 8 bits, CMYK 8 bits, Duotone 8 bits,
     *
     * Grayscale 8 bits, Lab 8 bits, Multichannel 8 bits
     * @param radius The blur radius [0.1,100].
     * @param threshold The blur threshold [0.1,100].
     * @param blurQuality The smoothness or graininess of the blurred image.
     * @param mode The smart blur mode.
     * @async
     * @minVersion 24.0
     */
    applySmartBlur(
        radius: number,
        threshold: number,
        blurQuality: Constants.SmartBlurQuality,
        mode: Constants.SmartBlurMode,
    ): Promise<void>;
    /**
     * Applies the Spherize filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @param amount The amount of distortion [-100,100].
     * @param mode The distortion mode.
     * @async
     * @minVersion 24.0
     */
    applySpherize(amount: number, mode: Constants.SpherizeMode): Promise<void>;
    /**
     * Applies the Unsharp Mask filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @param amount The amount of sharpening (as a whole number percentage) [1,500].
     * @param radius The radius in pixels [0.1,1000].
     * @param threshold The contrast threshold [0,255].
     * @async
     * @minVersion 24.0
     */
    applyUnSharpMask(amount: number, radius: number, threshold: number): Promise<void>;
    /**
     * Applies the Wave filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @param generatorNumber The whole number of generators [1,999].
     * @param minimumWavelength The minimum wave length [1,(maximum wave length - 1)] (whole number).
     * @param maximumWavelength The maximum wave length [(minimum wave length + 1),999] (whole number).
     * @param minimumAmplitude The minimum amplitude [1,(maximum amplitude - 1)] (whole number).
     * @param maximumAmplitude The maximum amplitude [(minimum amplitude + 1),999] (whole number).
     * @param horizontalScale The amount of horizontal scale (as a percentage) [1,100] (whole number).
     * @param verticalScale The amount of vertical scale (as a percentage) [1,100] (whole number).
     * @param waveType The wave type (optional).
     * @param undefinedAreas The treatment of areas left blank by the distortion (optional).
     * @param randomSeed The random seed (optional).
     * @async
     * @minVersion 24.0
     */
    applyWave(
        generatorNumber: number,
        minimumWavelength: number,
        maximumWavelength: number,
        minimumAmplitude: number,
        maximumAmplitude: number,
        horizontalScale: number,
        verticalScale: number,
        waveType?: Constants.WaveType,
        undefinedAreas?: Constants.UndefinedAreas,
        randomSeed?: number,
    ): Promise<void>;
    /**
     * Applies the ZigZag filter.
     *
     * Unsupported color modes: Indexed Color, Bitmap
     *
     * @param amount The amount of zigzag [-100,100].
     * @param ridges The number of ridges [0,20].
     * @param style The zigzag style.
     * @async
     * @minVersion 24.0
     */
    applyZigZag(amount: number, ridges: number, style: Constants.ZigZagType): Promise<void>;
    /**
     * The applyImage method lets you blend one image’s layer and channel (the source) with a this layer (the target).
     * This will change pixels contained in this layer.
     * Performs Image > Apply Image on the document. See the ApplyImageOptions
     * object for more info and examples.
     * @param applyImageOptions Option object for applyImage.
     * @async
     * @minVersion 24.5
     */
    applyImage(applyImageOptions: ApplyImageOptions): Promise<void>;
    /**
     * Deletes this layer from the document.
     * ```javascript
     * const layers = document.layers
     * layers && layers[0] && layers[0].delete()
     * ```
     * @returns number of layer elements deleted
     * @minVersion 23.0
     */
    delete(): void;
    /**
     * Duplicates the layer, creating a copy above it in layer stack,
     * and returns the newly created layer.
     *
     * ```javascript
     * // duplicate a layer
     * const copyLayer = await layer.duplicate()
     *
     * // extract to a new document
     * const exportDoc = psApp.documents[1]
     * const exportedLayer = await layer.duplicate(exportDoc)
     * ```
     * @param targetDocument if specified, duplicate to a different document target.
     *
     * @async
     * @minVersion 23.0
     */
    duplicate(
        relativeObject?: Document | Layer,
        insertionLocation?: Constants.ElementPlacement,
        name?: string,
    ): Promise<Layer | null>;
    /**
     * Creates a link between this layer and the target layer if not already linked,
     * and returns a list of layers linked to this layer.
     *
     * ```javascript
     * // link two layers together
     * const linkedLayers = strokes.link(fillLayer)
     * linkedLayers.forEach((layer) => console.log(layer.name))
     * > "strokes"
     * > "fillLayer"
     * ```
     * @minVersion 23.0
     */
    link(targetLayer: Layer): Layer[];
    /**
     * Unlinks the layer from any existing links.
     *
     * ```javascript
     * // detach layer from any existing links
     * await layer.unlink()
     * ```
     * @async
     * @minVersion 23.0
     */
    unlink(): Promise<void>;
    /**
     * Moves the layer relative to the layer specified in parameters.
     * "placeAfter" places the layer below relativeObject.
     * "placeBefore" places the layer above relativeObject.
     * "placeInside" places the layer inside relativeObject if relativeObject is a group layer.
     * `ElementPlacement.PLACEINSIDE` is only valid when `relativeObject.kind === LayerKind.group`
     * @minVersion 23.0
     */
    move(relativeObject: Layer, insertLocation: Constants.ElementPlacement): void;
    /**
     * Moves the layer to a position above the topmost layer or group.
     * @minVersion 23.0
     */
    bringToFront(): void;
    /**
     * Moves the layer to the bottom. If the bottom layer is the
     * background, it will move the layer to the position above the background.
     * If it is in a group, it will move to the bottom of the group.
     * @minVersion 23.0
     */
    sendToBack(): void;
    /**
     * Moves the layer (translation).
     *
     * ```javascript
     * // Translate the layer to the left by 200px
     * await layer.translate(-200, 0)
     *
     * // move the layer one height down
     * let xOffsetPct = {_unit: "percentUnit", _value: 0};
     * let yOffsetPct = {_unit: "percentUnit", _value: 100};
     * await layer.translate(xOffsetPct, yOffsetPct);
     * ```
     * @param horizontal Numeric value to offset layer by in pixels or percent
     * @param vertical Numeric value to offset layer by in pixels or percent
     *
     * @async
     * @minVersion 23.0
     */
    translate(
        horizontal: number | Unit.PercentValue | Unit.PixelValue,
        vertical: number | Unit.PercentValue | Unit.PixelValue,
    ): Promise<void>;
    /**
     * Flips the layer on one or both axis.
     *
     * ```javascript
     * // flip horizontally
     * await layer.flip.horizontal()
     * ```
     * @param axis Which axis (or both) to flip the layer on.
     *             - "horizontal": flip layer on horizontal axis
     *             - "vertical": flip layer on vertical axis
     *             - "both": flip layer on both axes
     * @async
     * @minVersion 23.0
     */
    flip(axis: "horizontal" | "vertical" | "both"): Promise<void>;
    /**
     * Scales the layer.
     *
     * Renamed from `resize` in ExtendScript.
     *
     * ```javascript
     * await layer.scale(80, 80)
     *
     * // Scale the layer to be a quarter of the size relative to bottom left corner
     * let anchorPos = require('photoshop').constants.AnchorPosition
     * await layer.scale(50, 50, anchorPos.BOTTOMLEFT)
     * ```
     * @param width Numeric percentage to scale layer horizontally
     * @param height Numeric percentage to scale layer vertically
     * @param anchor Anchor position to rotate around
     * @param options.interpolation Interpolation method to use when resampling the image
     *
     * @async
     * @minVersion 23.0
     */
    scale(
        width: number | Unit.PercentValue,
        height: number | Unit.PercentValue,
        anchor?: Constants.AnchorPosition,
        options?: {
            interpolation?: Constants.InterpolationMethod;
        },
    ): Promise<void>;
    /**
     * Rotates the layer.
     *
     * ```javascript
     * // rotate 90 deg counter clockwise
     * await layer.rotate(-90)
     *
     * // rotate 90 deg clockwise relative to top left corner
     * let anchorPos = require('photoshop').constants.AnchorPosition
     * await layer.rotate(90, anchorPos.TOPLEFT)
     * ```
     * @param angle Angle to rotate the layer by in degrees
     * @param anchor Anchor position to rotate around
     * @param options.interpolation Interpolation method to use when resampling the image
     *
     * @async
     * @minVersion 23.0
     */
    rotate(angle: number | Unit.AngleValue, anchor?: Constants.AnchorPosition, options?: {
        interpolation?: Constants.InterpolationMethod;
    }): Promise<void>;
    /**
     * Applies a skew to the layer.
     *
     * ```javascript
     * // parellelogram shape
     * await layer.skew(-15, 0)
     * ```
     * @param angleH Horizontal angle to skew by
     * @param angleV Vertical angle to skew by
     * @param option.interpolation Interpolation method to use when resampling the image
     *
     * @async
     * @minVersion 23.0
     */
    skew(angleH: number | Unit.AngleValue, angleV: number | Unit.AngleValue, options?: {
        interpolation?: Constants.InterpolationMethod;
    }): Promise<void>;
    /**
     * Clears the layer pixels and does not copy to the clipboard.
     * If no pixel selection is found, select all pixels and clear.
     *
     * @async
     * @minVersion 23.0
     */
    clear(): Promise<void>;
    /**
     * Copies the layer to the clipboard. When the optional argument is set to true, a
     * merged copy is performed (that is, all visible layers are copied to the clipboard).
     *
     * ```javascript
     * await layer.copy(true)
     * await layer.copy()
     * ```
     * @async
     * @minVersion 23.0
     */
    copy(merge?: boolean): Promise<void>;
    /**
     * Cuts the layer contents to the clipboard. If no selection is found then select all the pixels and then cut.
     *
     * @async
     * @minVersion 23.0
     */
    cut(): Promise<void>;
    /**
     * Merges layers. This operates on the currently selected layers. If multiple
     * layers are selected, they will be merged together. If one layer is selected,
     * it is merged down with the layer beneath. In this case, the layer below must
     * be a pixel layer. The merged layer will now be the active layer.
     *
     * @async
     * @minVersion 23.0
     */
    merge(): Promise<Layer>;
    /**
     * Converts the targeted contents in the layer into a flat, raster image.
     *
     * @async
     * @minVersion 23.0
     */
    rasterize(target: Constants.RasterizeType): Promise<void>;
    /**
     * The layers inside this group layer.
     * @minVersion 23.0
     */
    get layers(): Layers | null;
}
