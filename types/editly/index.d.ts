// Type definitions for editly 0.11
// Project: https://github.com/mifi/editly
// Definitions by: Skayo <https://github.com/Skayo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { fabric } from 'fabric';

/**
 * Edit and render videos.
 *
 * @param config - Config.
 */
declare function Editly(config: Editly.Config): Promise<void>;

declare namespace Editly {
    /** Little utility */
    type OptionalPromise<T> = Promise<T> | T;

    type OriginX = 'left' | 'center' | 'right';

    type OriginY = 'top' | 'center' | 'bottom';

    /**
     * How to fit image to screen. Can be one of:
     * - `'contain'` - All the video will be contained within the frame and letterboxed.
     * - `'contain-blur'` - Like contain, but with a blurred copy as the letterbox.
     * - `'cover'` - Video be cropped to cover the whole screen (aspect ratio preserved).
     * - `'stretch'` - Video will be stretched to cover the whole screen (aspect ratio ignored).
     *
     * @default 'contain-blur'
     * @see [Example 'image.json5']{@link https://github.com/mifi/editly/blob/master/examples/image.json5}
     * @see [Example 'videos.json5']{@link https://github.com/mifi/editly/blob/master/examples/videos.json5}
     */
    type ResizeMode = 'contain' | 'contain-blur' | 'cover' | 'stretch';

    /**
     * An object, where `{ x: 0, y: 0 }` is the upper left corner of the screen and `{ x: 1, y: 1 }` is the lower right corner.
     */
    interface PositionObject {
        /**
         * X-position relative to video width.
         */
        x: number;

        /**
         * Y-position relative to video height.
         */
        y: number;

        /**
         * X-anchor position of the object.
         */
        originX?: OriginX;

        /**
         * Y-anchor position of the object.
         */
        originY?: OriginY;
    }

    /**
     * Certain layers support the position parameter.
     *
     * @see [Position parameter]{@link https://github.com/mifi/editly#position-parameter}
     * @see [Example 'position.json5']{@link https://github.com/mifi/editly/blob/master/examples/position.json5}
     */
    type Position =
        | 'top'
        | 'top-left'
        | 'top-right'
        | 'center'
        | 'center-left'
        | 'center-right'
        | 'bottom'
        | 'bottom-left'
        | 'bottom-right'
        | PositionObject;

    /**
     * @see [Curve types]{@link https://trac.ffmpeg.org/wiki/AfadeCurves}
     */
    type CurveType =
        | 'tri'
        | 'qsin'
        | 'hsin'
        | 'esin'
        | 'log'
        | 'ipar'
        | 'qua'
        | 'cub'
        | 'squ'
        | 'cbr'
        | 'par'
        | 'exp'
        | 'iqsin'
        | 'ihsin'
        | 'dese'
        | 'desi'
        | 'losi'
        | 'nofade'
        | string;

    /**
     * @see [Transition types]{@link https://github.com/mifi/editly#transition-types}
     */
    type TransitionType =
        | 'directional-left'
        | 'directional-right'
        | 'directional-up'
        | 'directional-down'
        | 'random'
        | 'dummy'
        | string;

    /**
     * WARNING: Undocumented feature!
     */
    interface GLTextureLike {
        bind: (unit: number) => number;
        shape: [ number, number ];
    }

    /**
     * WARNING: Undocumented feature!
     */
    interface TransitionParams {
        /**
         * WARNING: Undocumented feature!
         */
        [key: string]: number | boolean | GLTextureLike | number[];
    }

    interface Transition {
        /**
         * Transition duration.
         *
         * @default 0.5
         */
        duration?: number;

        /**
         * Transition type.
         *
         * @default 'random'
         * @see [Transition types]{@link https://github.com/mifi/editly#transition-types}
         */
        name?: TransitionType;

        /**
         * [Fade out curve]{@link https://trac.ffmpeg.org/wiki/AfadeCurves} in audio cross fades.
         *
         * @default 'tri'
         */
        audioOutCurve?: CurveType;

        /**
         * [Fade in curve]{@link https://trac.ffmpeg.org/wiki/AfadeCurves} in audio cross fades.
         *
         * @default 'tri'
         */
        audioInCurve?: CurveType;

        /**
         * WARNING: Undocumented feature!
         */
        easing?: string | null;

        /**
         * WARNING: Undocumented feature!
         */
        params?: TransitionParams;
    }

    /**
     * @see [Arbitrary audio tracks]{@link https://github.com/mifi/editly#arbitrary-audio-tracks}
     */
    interface AudioTrack {
        /**
         * File path for this track.
         */
        path: string;

        /**
         * Relative volume for this track.
         *
         * @default 1
         */
        mixVolume?: number | string;

        /**
         * Time value to cut source file from (in seconds).
         *
         * @default 0
         */
        cutFrom?: number;

        /**
         * Time value to cut source file to (in seconds).
         */
        cutTo?: number;

        /**
         * How many seconds into video to start this audio track.
         *
         * @default 0
         */
        start?: number;
    }

    /**
     * @see [Ken Burns parameters]{@link https://github.com/mifi/editly#ken-burns-parameters}
     */
    interface KenBurns {
        /**
         * Zoom direction for Ken Burns effect.
         * Use `null` to disable.
         */
        zoomDirection?: 'in' | 'out' | null;

        /**
         * Zoom amount for Ken Burns effect.
         *
         * @default 0.1
         */
        zoomAmount?: number;
    }

    type LayerType =
        | 'video'
        | 'audio'
        | 'detached-audio'
        | 'image'
        | 'image-overlay'
        | 'title'
        | 'subtitle'
        | 'title-background'
        | 'news-title'
        | 'slide-in-text'
        | 'fill-color'
        | 'pause'
        | 'radial-gradient'
        | 'linear-gradient'
        | 'rainbow-colors'
        | 'canvas'
        | 'fabric'
        | 'gl'
        | 'editly-banner';

    interface BaseLayer {
        /**
         * Layer type.
         */
        type: LayerType;

        /**
         * What time into the clip should this layer start (in seconds).
         */
        start?: number;

        /**
         * What time into the clip should this layer stop (in seconds).
         */
        stop?: number;
    }

    /**
     * For video layers, if parent `clip.duration` is specified, the video will be slowed/sped-up to match `clip.duration`.
     * If `cutFrom`/`cutTo` is set, the resulting segment (`cutTo`-`cutFrom`) will be slowed/sped-up to fit `clip.duration`.
     * If the layer has audio, it will be kept (and mixed with other audio layers if present).
     */
    interface VideoLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'video';

        /**
         * Path to video file.
         */
        path: string;

        /**
         * How to fit video to screen.
         *
         * @default 'contain-blur'
         * @see [Resize modes]{@link https://github.com/mifi/editly#resize-modes}
         */
        resizeMode?: ResizeMode;

        /**
         * Time value to cut from (in seconds).
         *
         * @default 0
         */
        cutFrom?: number;

        /**
         * Time value to cut to (in seconds).
         * Defaults to *end of video*.
         */
        cutTo?: number;

        /**
         * Width relative to screen width.
         * Must be between 0 and 1.
         *
         * @default 1
         */
        width?: number;

        /**
         * Height relative to screen height.
         * Must be between 0 and 1.
         *
         * @default 1
         */
        height?: number;

        /**
         * X-position relative to screen width.
         * Must be between 0 and 1.
         *
         * @default 0
         */
        left?: number;

        /**
         * Y-position relative to screen height.
         * Must be between 0 and 1.
         *
         * @default 0
         */
        top?: number;

        /**
         * X-anchor.
         *
         * @default 'left'
         */
        originX?: OriginX;

        /**
         * Y-anchor.
         *
         * @default 'top'
         */
        originY?: OriginY;

        /**
         * Relative volume when mixing this video's audio track with others.
         *
         * @default 1
         */
        mixVolume?: number | string;
    }

    /**
     * Audio layers will be mixed together.
     * If `cutFrom`/`cutTo` is set, the resulting segment (`cutTo`-`cutFrom`) will be slowed/sped-up to fit `clip.duration`.
     * The slow down/speed-up operation is limited to values between `0.5x` and `100x`.
     */
    interface AudioLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'audio';

        /**
         * Path to audio file.
         */
        path: string;

        /**
         * Time value to cut from (in seconds).
         *
         * @default 0
         */
        cutFrom?: number;

        /**
         * Time value to cut to (in seconds).
         * Defaults to `clip.duration`.
         */
        cutTo?: number;

        /**
         * Relative volume when mixing this audio track with others.
         *
         * @default 1
         */
        mixVolume?: number | string;
    }

    /**
     * This is a special case of `audioTracks` that makes it easier to start the audio relative to clips start times,
     * without having to calculate global start times.
     *
     * This layer has the exact same properties as [`audioTracks`]{@link https://github.com/mifi/editly#arbitrary-audio-tracks},
     * except `start` time is relative to the clip's start.
     */
    interface DetachedAudioLayer extends BaseLayer, AudioTrack {
        /**
         * Layer type.
         */
        type: 'detached-audio';
    }

    /**
     * Full screen image.
     */
    interface ImageLayer extends BaseLayer, KenBurns {
        /**
         * Layer type.
         */
        type: 'image';

        /**
         * Path to image file.
         */
        path: string;

        /**
         * How to fit image to screen.
         */
        resizeMode?: ResizeMode;

        /**
         * WARNING: Undocumented feature!
         */
        duration?: number;
    }

    /**
     * Image overlay with a custom position and size on the screen.
     */
    interface ImageOverlayLayer extends BaseLayer, KenBurns {
        /**
         * Layer type.
         */
        type: 'image-overlay';

        /**
         * Path to image file.
         */
        path: string;

        /**
         * Position.
         */
        position?: Position;

        /**
         * Width (from 0 to 1) where 1 is screen width.
         */
        width?: number;

        /**
         * Height (from 0 to 1) where 1 is screen height.
         */
        height?: number;
    }

    interface TitleLayer extends BaseLayer, KenBurns {
        /**
         * Layer type.
         */
        type: 'title';

        /**
         * Title text to show, keep it short.
         */
        text: string;

        /**
         * Text color.
         * Defaults to '#ffffff'.
         */
        textColor?: string;

        /**
         * Set font (`.ttf`).
         * Defaults to system font.
         */
        fontPath?: string;

        /**
         * Position.
         */
        position?: Position;
    }

    interface SubtitleLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'subtitle';

        /**
         * Subtitle text to show.
         */
        text: string;

        /**
         * Text color.
         * Defaults to '#ffffff'.
         */
        textColor?: string;

        /**
         * Set font (`.ttf`).
         * Defaults to system font.
         */
        fontPath?: string;

        /**
         * WARNING: Undocumented feature!
         */
        backgroundColor?: string;
    }

    /**
     * Title with background.
     */
    interface TitleBackgroundLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'title-background';

        /**
         * Title text to show, keep it short.
         */
        text: string;

        /**
         * Text color.
         * Defaults to '#ffffff'.
         */
        textColor?: string;

        /**
         * Set font (`.ttf`).
         * Defaults to system font.
         */
        fontPath?: string;

        /**
         * Background layer.
         * Defaults to random background.
         */
        background?: BackgroundLayer;
    }

    interface NewsTitleLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'news-title';

        /**
         * Title text to show, keep it short.
         */
        text: string;

        /**
         * Text color.
         * Defaults to '#ffffff'.
         */
        textColor?: string;

        /**
         * Set font (`.ttf`).
         * Defaults to system font.
         */
        fontPath?: string;

        /**
         * Background color.
         * Defaults to '#d02a42'.
         */
        backgroundColor?: string;

        /**
         * Position.
         */
        position?: Position;
    }

    interface SlideInTextLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'slide-in-text';

        /**
         * Title text to show, keep it short.
         */
        text: string;

        /**
         * Set font (`.ttf`).
         * Defaults to system font.
         */
        fontPath?: string;

        /**
         * Font size.
         */
        fontSize?: number;

        /**
         * Char spacing.
         */
        charSpacing?: number;

        /**
         * Color.
         */
        color?: string;

        /**
         * Position.
         */
        position?: Position;
    }

    interface FillColorLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'fill-color';

        /**
         * Color to fill background.
         * Defaults to random color.
         */
        color?: string;
    }

    interface PauseLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'pause';

        /**
         * Color to fill background.
         * Defaults to random color.
         */
        color?: string;
    }

    interface RadialGradientLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'radial-gradient';

        /**
         * Array of two colors.
         * Defaults to random colors.
         */
        colors?: [string, string];
    }

    interface LinearGradientLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'linear-gradient';

        /**
         * Array of two colors.
         * Defaults to random colors.
         */
        colors?: [string, string];
    }

    interface RainbowColorsLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'rainbow-colors';
    }

    type OnRenderCallback = (progress: number, canvas: fabric.Canvas) => OptionalPromise<void>;
    type OnCloseCallback = () => OptionalPromise<void>;

    interface CustomFunctionCallbacks {
        onRender: OnRenderCallback;
        onClose?: OnCloseCallback;
    }

    interface CustomCanvasFunctionArgs {
        width: number;
        height: number;
        canvas: fabric.Canvas;
    }

    type CustomCanvasFunction = (args: CustomCanvasFunctionArgs) => OptionalPromise<CustomFunctionCallbacks>;

    interface CanvasLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'canvas';

        /**
         * Custom JavaScript function.
         */
        func: CustomCanvasFunction;
    }

    interface CustomFabricFunctionArgs {
        width: number;
        height: number;
        fabric: typeof fabric;
        canvas: fabric.Canvas;
        params: any;
    }

    type CustomFabricFunction = (args: CustomFabricFunctionArgs) => OptionalPromise<CustomFunctionCallbacks>;

    interface FabricLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'fabric';

        /**
         * Custom JavaScript function.
         */
        func: CustomFabricFunction;
    }

    interface GlLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'gl';

        /**
         * Fragment path (`.frag` file)
         */
        fragmentPath: string;

        /**
         * Vertex path (`.vert` file).
         */
        vertexPath?: string;

        /**
         * WARNING: Undocumented feature!
         */
        speed?: number;
    }

    /**
     * WARNING: Undocumented feature!
     */
    interface EditlyBannerLayer extends BaseLayer {
        /**
         * Layer type.
         */
        type: 'editly-banner';
    }

    /**
     * @see [Examples]{@link https://github.com/mifi/editly/tree/master/examples}
     * @see [Example 'commonFeatures.json5']{@link https://github.com/mifi/editly/blob/master/examples/commonFeatures.json5}
     */
    type Layer =
        | VideoLayer
        | AudioLayer
        | DetachedAudioLayer
        | ImageLayer
        | ImageOverlayLayer
        | TitleLayer
        | SubtitleLayer
        | TitleBackgroundLayer
        | NewsTitleLayer
        | SlideInTextLayer
        | FillColorLayer
        | PauseLayer
        | RadialGradientLayer
        | LinearGradientLayer
        | RainbowColorsLayer
        | CanvasLayer
        | FabricLayer
        | GlLayer
        | EditlyBannerLayer;

    /**
     * Special layers that can be used f.e. in the 'title-background' layer.
     */
    type BackgroundLayer = RadialGradientLayer | LinearGradientLayer | FillColorLayer;

    interface Clip {
        /**
         * List of layers within the current clip that will be overlaid in their natural order (final layer on top).
         */
        layers: Layer[] | Layer;

        /**
         * Clip duration.
         * If unset, the clip duration will be that of the first video layer.
         * Defaults to `defaults.duration`.
         */
        duration?: number;

        /**
         * Specify transition at the end of this clip.
         * Defaults to `defaults.transition`.
         * Set to `null` to disable transitions.
         */
        transition?: Transition | null;
    }

    interface DefaultLayerOptions {
        /**
         * Set default font (`.ttf`).
         * Defaults to system font.
         */
        fontPath?: string;

        /**
         * Set any layer parameter that all layers will inherit.
         */
        [key: string]: any;
    }

    type DefaultLayerTypeOptions = {
        /**
         * Set any layer parameter that all layers of the same type (specified in key) will inherit.
         */
        [P in LayerType]?: Partial<Omit<Extract<Layer, { type: P }>, 'type'>>;
    };

    interface DefaultOptions {
        /**
         * Set default clip duration for clips that don't have an own duration (in seconds).
         *
         * @default 4
         */
        duration?: number;

        /**
         * An object describing the default layer options.
         */
        layer?: DefaultLayerOptions;

        /**
         * Defaults for each individual layer types.
         */
        layerType?: DefaultLayerTypeOptions;

        /**
         * An object describing the default transition.
         * Set to `null` to disable transitions.
         */
        transition?: Transition | null;
    }

    /**
     * You can enable audio normalization of the final output audio.
     * This is useful if you want to achieve Audio Ducking (e.g. automatically lower volume of all other tracks when voice-over speaks).
     *
     * @see [Dynaudnorm]{@link https://ffmpeg.org/ffmpeg-filters.html#dynaudnorm}
     * @see [Example of audio ducking]{@link https://github.com/mifi/editly/blob/master/examples/audio2.json5}
     */
    interface AudioNormalizationOptions {
        /**
         * Enable audio normalization?
         *
         * @default false
         * @see [Audio normalization]{@link https://github.com/mifi/editly#audio-normalization}
         */
        enable?: boolean;

        /**
         * Audio normalization gauss size.
         *
         * @default 5
         * @see [Audio normalization]{@link https://github.com/mifi/editly#audio-normalization}
         */
        gaussSize?: number;

        /**
         * Audio normalization max gain.
         *
         * @default 30
         * @see [Audio normalization]{@link https://github.com/mifi/editly#audio-normalization}
         */
        maxGain?: number;
    }

    interface Config {
        /**
         * Output path (`.mp4` or `.mkv`, can also be a `.gif`).
         */
        outPath: string;

        /**
         * List of clip objects that will be played in sequence.
         * Each clip can have one or more layers.
         *
         * @default []
         */
        clips: Clip[];

        /**
         * Width which all media will be converted to.
         *
         * @default 640
         */
        width?: number;

        /**
         * Height which all media will be converted to.
         * Decides height based on `width` and aspect ratio of the first video by default.
         */
        height?: number;

        /**
         * FPS which all videos will be converted to.
         * Defaults to first video's FPS or `25`.
         */
        fps?: number;

        /**
         * Specify custom output codec/format arguments for ffmpeg.
         * Automatically adds codec options (normally `h264`) by default.
         *
         * @see [Example]{@link https://github.com/mifi/editly/blob/master/examples/customOutputArgs.json5}
         */
        customOutputArgs?: string[];

        /**
         * Allow remote URLs as paths.
         *
         * @default false
         */
        allowRemoteRequests?: boolean;

        /**
         * Fast mode (low resolution and FPS, useful for getting a quick preview ⏩).
         *
         * @default false
         */
        fast?: boolean;

        /**
         * An object describing default options for clips and layers.
         */
        defaults?: DefaultOptions;

        /**
         * List of arbitrary audio tracks.
         *
         * @default []
         * @see [Audio tracks]{@link https://github.com/mifi/editly#arbitrary-audio-tracks}
         */
        audioTracks?: AudioTrack[];

        /**
         * Set an audio track for the whole video..
         *
         * @see [Audio tracks]{@link https://github.com/mifi/editly#arbitrary-audio-tracks}
         */
        audioFilePath?: string;

        /**
         * Loop the audio track if it is shorter than video?
         *
         * @default false
         */
        loopAudio?: boolean;

        /**
         * Keep source audio from `clips`?
         *
         * @default false
         */
        keepSourceAudio?: boolean;

        /**
         * Volume of audio from `clips` relative to `audioTracks`.
         *
         * @default 1
         * @see [Audio tracks]{@link https://github.com/mifi/editly#arbitrary-audio-tracks}
         */
        clipsAudioVolume?: number | string;

        /**
         * Adjust output [volume]{@link http://ffmpeg.org/ffmpeg-filters.html#volume} (final stage).
         *
         * @default 1
         * @see [Example]{@link https://github.com/mifi/editly/blob/master/examples/audio-volume.json5}
         * @example
         * 0.5
         * @example
         * '10db'
         */
        outputVolume?: number | string;

        /**
         * Audio normalization.
         */
        audioNorm?: AudioNormalizationOptions;

        /**
         * WARNING: Undocumented feature!
         */
        ffmpegPath?: string;

        /**
         * WARNING: Undocumented feature!
         */
        ffprobePath?: string;

        /**
         * WARNING: Undocumented feature!
         */
        enableFfmpegLog?: boolean;

        /**
         * WARNING: Undocumented feature!
         */
        verbose?: boolean;

        /**
         * WARNING: Undocumented feature!
         */
        logTimes?: boolean;

        /**
         * WARNING: Undocumented feature!
         */
        keepTmp?: boolean;
    }

    interface RenderSingleFrameConfig extends Omit<Config, 'outPath'> {
        /**
         * Output path (`.mp4` or `.mkv`, can also be a `.gif`).
         */
        outPath?: string;

        /**
         * Timestamp to render.
         */
        time?: number;
    }

    /**
     * WARNING: Undocumented feature!
     * Pure function to get a frame at a certain time.
     *
     * @param config - Config.
     */
    function renderSingleFrame(config: RenderSingleFrameConfig): Promise<void>;
}

export = Editly;
