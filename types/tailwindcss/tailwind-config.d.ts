import { TailwindPlugin } from './plugin';

export type TailwindVariant =
    | 'empty'
    | 'read-only'
    | 'responsive'
    | 'first'
    | 'last'
    | 'odd'
    | 'even'
    | 'visited'
    | 'checked'
    | 'group-hover'
    | 'group-focus'
    | 'focus-within'
    | 'hover'
    | 'focus'
    | 'focus-visible'
    | 'active'
    | 'disabled'
    | 'dark';

export type TailwindCorePlugin =
    | 'preflight'
    | 'container'
    | 'space'
    | 'divideWidth'
    | 'divideColor'
    | 'divideStyle'
    | 'divideOpacity'
    | 'accessibility'
    | 'appearance'
    | 'backgroundAttachment'
    | 'backgroundClip'
    | 'backgroundColor'
    | 'backgroundImage'
    | 'gradientColorStops'
    | 'backgroundOpacity'
    | 'backgroundPosition'
    | 'backgroundRepeat'
    | 'backgroundSize'
    | 'borderCollapse'
    | 'borderColor'
    | 'borderOpacity'
    | 'borderRadius'
    | 'borderStyle'
    | 'borderWidth'
    | 'boxSizing'
    | 'cursor'
    | 'display'
    | 'flexDirection'
    | 'flexWrap'
    | 'placeItems'
    | 'placeContent'
    | 'placeSelf'
    | 'alignItems'
    | 'alignContent'
    | 'alignSelf'
    | 'justifyItems'
    | 'justifyContent'
    | 'justifySelf'
    | 'flex'
    | 'flexGrow'
    | 'flexShrink'
    | 'order'
    | 'float'
    | 'clear'
    | 'fontFamily'
    | 'fontWeight'
    | 'height'
    | 'fontSize'
    | 'lineHeight'
    | 'listStylePosition'
    | 'listStyleType'
    | 'margin'
    | 'maxHeight'
    | 'maxWidth'
    | 'minHeight'
    | 'minWidth'
    | 'objectFit'
    | 'objectPosition'
    | 'opacity'
    | 'outline'
    | 'overflow'
    | 'overscrollBehavior'
    | 'padding'
    | 'placeholderColor'
    | 'placeholderOpacity'
    | 'pointerEvents'
    | 'position'
    | 'inset'
    | 'resize'
    | 'boxShadow'
    | 'ringWidth'
    | 'ringOffsetColor'
    | 'ringOffsetWidth'
    | 'ringColor'
    | 'ringOpacity'
    | 'fill'
    | 'stroke'
    | 'strokeWidth'
    | 'tableLayout'
    | 'textAlign'
    | 'textColor'
    | 'textOpacity'
    | 'textOverflow'
    | 'fontStyle'
    | 'textTransform'
    | 'textDecoration'
    | 'fontSmoothing'
    | 'fontVariantNumeric'
    | 'letterSpacing'
    | 'userSelect'
    | 'verticalAlign'
    | 'visibility'
    | 'whitespace'
    | 'wordBreak'
    | 'width'
    | 'zIndex'
    | 'gap'
    | 'gridAutoFlow'
    | 'gridTemplateColumns'
    | 'gridAutoColumns'
    | 'gridColumn'
    | 'gridColumnStart'
    | 'gridColumnEnd'
    | 'gridTemplateRows'
    | 'gridAutoRows'
    | 'gridRow'
    | 'gridRowStart'
    | 'gridRowEnd'
    | 'transform'
    | 'transformOrigin'
    | 'scale'
    | 'rotate'
    | 'translate'
    | 'skew'
    | 'transitionProperty'
    | 'transitionTimingFunction'
    | 'transitionDuration'
    | 'transitionDelay'
    | 'animation'
    | 'columns'
    | 'backdropFilter'
    | 'backdropBlur'
    | 'backdropBrightness'
    | 'backdropContrast'
    | 'backdropGrayscale'
    | 'backdropHueRotate'
    | 'backdropOpacity'
    | 'backdropInvert'
    | 'backdropSaturate'
    | 'backdropSepia'
    | 'aspectRatio'
    | 'blur'
    | 'brightness'
    | 'caretColor'
    | 'accentColor'
    | 'contrast'
    | 'content'
    | 'dropShadow'
    | 'grayscale'
    | 'hueRotate'
    | 'invert'
    | 'saturate'
    | 'scrollMargin'
    | 'scrollPadding'
    | 'sepia'
    | 'textIndent'
    | 'willChange'
    | 'touchAction'
    | 'isolation'
    | 'scrollSnapType'
    | 'scrollSnapAlign'
    | 'scrollSnapStop'
    | 'breakBefore'
    | 'breakInside'
    | 'breakAfter'
    | 'scrollBehavior'
    | 'boxDecorationBreak'
    | 'backgroundOrigin'
    | 'backgroundBlendMode'
    | 'mixBlendMode'
    | 'filter';

export type TailwindColorFunction = (props: { opacityVariable: string; opacityValue: string }) => string;

export interface TailwindColorGroup {
    readonly [key: string]: string;
}

export interface TailwindAnimationConfig {
    [key: string]: {
        transform?: string | undefined;
        opacity?: string | undefined;
        animationTimingFunction?: string | undefined;
    };
}

export type TailwindFontConfig =
    | string
    | [string, string]
    | [
          string,
          {
              lineHeight?: string;
              letterSpacing?: string;
          },
      ];

export type TailwindValidLayers = 'base' | 'components' | 'utilities' | 'screens';

export interface TailwindPurgeConfig {
    /**
     * Array of glob paths
     */
    content: string[];
    /**
     * @see https://tailwindcss.com/docs/optimizing-for-production#enabling-manually
     */
    enabled?: boolean | undefined;
    /**
     * @see https://tailwindcss.com/docs/optimizing-for-production#preserving-html-elements
     */
    preserveHtmlElements?: boolean | undefined;
    /**
     * Purge specific layers
     * @see https://tailwindcss.com/docs/optimizing-for-production#purging-specific-layers
     */
    layers?: TailwindValidLayers[] | undefined;
    /**
     * Remove all unused styles
     * @see https://tailwindcss.com/docs/optimizing-for-production#removing-all-unused-styles
     */
    mode?: 'all' | undefined;
}

export interface TailwindValues {
    readonly [key: string]: string;
}

export type TailwindColorValue = string | TailwindColorGroup | TailwindColorFunction;

export interface TailwindValuesColor {
    readonly [key: string]: TailwindColorValue;
}

export interface TailwindValuesAnimation {
    readonly [key: string]: TailwindAnimationConfig;
}

export interface TailwindValuesFontFamily {
    readonly [key: string]: string[];
}

export interface TailwindValuesFontSize {
    readonly [key: string]: TailwindFontConfig;
}

export interface TailwindValuesDropShadow {
    readonly [key: string]: string | string[];
}

export interface TailwindValuesOutline {
    readonly [key: string]: string[];
}

export type TailwindThemeGetter<T> = ((getters: { theme: any; negative: any; colors: any; breakpoints: any }) => T) | T;

export type TailwindThemeValue = TailwindThemeGetter<TailwindValues>;
export type TailwindThemeColors = TailwindThemeGetter<TailwindValuesColor>;
export type TailwindThemeAnimations = TailwindThemeGetter<TailwindValuesAnimation>;
export type TailwindThemeFontFamilies = TailwindThemeGetter<TailwindValuesFontFamily>;
export type TailwindThemeFontSizes = TailwindThemeGetter<TailwindValuesFontSize>;
export type TailwindThemeOutlines = TailwindThemeGetter<TailwindValuesOutline>;
export type TailwindThemeShadows = TailwindThemeGetter<TailwindValuesDropShadow>;

export interface TailwindTheme {
    readonly extend?: Omit<TailwindTheme, 'extend'>;
    readonly screens?: TailwindThemeValue;
    readonly colors?: TailwindThemeColors;
    readonly columns?: TailwindThemeValue;
    readonly spacing?: TailwindThemeValue;
    readonly animation?: TailwindThemeValue;
    readonly aspectRatio?: TailwindThemeValue;
    readonly backdropBlur?: TailwindThemeValue;
    readonly backdropBrightness?: TailwindThemeValue;
    readonly backdropContrast?: TailwindThemeValue;
    readonly backdropGrayscale?: TailwindThemeValue;
    readonly backdropHueRotate?: TailwindThemeValue;
    readonly backdropInvert?: TailwindThemeValue;
    readonly backdropOpacity?: TailwindThemeValue;
    readonly backdropSaturate?: TailwindThemeValue;
    readonly backdropSepia?: TailwindThemeValue;
    readonly backgroundColor?: TailwindThemeColors;
    readonly backgroundImage?: TailwindThemeValue;
    readonly backgroundOpacity?: TailwindThemeValue;
    readonly backgroundPosition?: TailwindThemeValue;
    readonly backgroundSize?: TailwindThemeValue;
    readonly blur?: TailwindThemeValue;
    readonly brightness?: TailwindThemeValue;
    readonly borderColor?: TailwindThemeColors;
    readonly borderOpacity?: TailwindThemeValue;
    readonly borderRadius?: TailwindThemeValue;
    readonly borderWidth?: TailwindThemeValue;
    readonly boxShadow?: TailwindThemeValue;
    readonly caretColor?: TailwindThemeColors;
    readonly accentColor?: TailwindThemeColors;
    readonly contrast?: TailwindThemeValue;
    readonly container?: TailwindThemeValue;
    readonly content?: TailwindThemeValue;
    readonly cursor?: TailwindThemeValue;
    readonly divideColor?: TailwindThemeColors;
    readonly divideOpacity?: TailwindThemeValue;
    readonly divideWidth?: TailwindThemeValue;
    readonly dropShadow?: TailwindThemeShadows;
    readonly fill?: TailwindThemeValue;
    readonly grayscale?: TailwindThemeValue;
    readonly hueRotate?: TailwindThemeValue;
    readonly invert?: TailwindThemeValue;
    readonly flex?: TailwindThemeValue;
    readonly flexGrow?: TailwindThemeValue;
    readonly flexShrink?: TailwindThemeValue;
    readonly fontFamily?: TailwindThemeFontFamilies;
    readonly fontSize?: TailwindThemeFontSizes;
    readonly fontWeight?: TailwindThemeValue;
    readonly gap?: TailwindThemeValue;
    readonly gradientColorStops?: TailwindThemeColors;
    readonly gridAutoColumns?: TailwindThemeValue;
    readonly gridAutoRows?: TailwindThemeValue;
    readonly gridColumn?: TailwindThemeValue;
    readonly gridColumnEnd?: TailwindThemeValue;
    readonly gridColumnStart?: TailwindThemeValue;
    readonly gridRow?: TailwindThemeValue;
    readonly gridRowStart?: TailwindThemeValue;
    readonly gridRowEnd?: TailwindThemeValue;
    readonly transformOrigin?: TailwindThemeValue;
    readonly gridTemplateColumns?: TailwindThemeValue;
    readonly gridTemplateRows?: TailwindThemeValue;
    readonly height?: TailwindThemeValue;
    readonly inset?: TailwindThemeValue;
    readonly keyframes?: TailwindThemeAnimations;
    readonly letterSpacing?: TailwindThemeValue;
    readonly lineHeight?: TailwindThemeValue;
    readonly listStyleType?: TailwindThemeValue;
    readonly margin?: TailwindThemeValue;
    readonly maxHeight?: TailwindThemeValue;
    readonly maxWidth?: TailwindThemeValue;
    readonly minHeight?: TailwindThemeValue;
    readonly minWidth?: TailwindThemeValue;
    readonly objectPosition?: TailwindThemeValue;
    readonly opacity?: TailwindThemeValue;
    readonly order?: TailwindThemeValue;
    readonly outline?: TailwindThemeOutlines;
    readonly padding?: TailwindThemeValue;
    readonly placeholderColor?: TailwindThemeColors;
    readonly placeholderOpacity?: TailwindThemeValue;
    readonly ringColor?: TailwindThemeColors;
    readonly ringOffsetColor?: TailwindThemeColors;
    readonly ringOffsetWidth?: TailwindThemeValue;
    readonly ringOpacity?: TailwindThemeValue;
    readonly ringWidth?: TailwindThemeValue;
    readonly rotate?: TailwindThemeValue;
    readonly saturate?: TailwindThemeValue;
    readonly scale?: TailwindThemeValue;
    readonly scrollMargin?: TailwindThemeValue;
    readonly scrollPadding?: TailwindThemeValue;
    readonly sepia?: TailwindThemeValue;
    readonly skew?: TailwindThemeValue;
    readonly space?: TailwindThemeValue;
    readonly stroke?: TailwindThemeValue;
    readonly strokeWidth?: TailwindThemeValue;
    readonly textColor?: TailwindThemeColors;
    readonly textIndent?: TailwindThemeValue;
    readonly textOpacity?: TailwindThemeValue;
    readonly transitionDuration?: TailwindThemeValue;
    readonly transitionDelay?: TailwindThemeValue;
    readonly transitionProperty?: TailwindThemeValue;
    readonly transitionTimingFunction?: TailwindThemeValue;
    readonly translate?: TailwindThemeValue;
    readonly width?: TailwindThemeValue;
    readonly willChange?: TailwindThemeValue;
    readonly zIndex?: TailwindThemeValue;
}

export type TailwindVariants = Partial<{
    readonly extend: Omit<TailwindConfig['variants'], 'extend'>;
    readonly accessibility: TailwindVariant[];
    readonly alignContent: TailwindVariant[];
    readonly alignItems: TailwindVariant[];
    readonly alignSelf: TailwindVariant[];
    readonly animation: TailwindVariant[];
    readonly appearance: TailwindVariant[];
    readonly backgroundAttachment: TailwindVariant[];
    readonly backgroundClip: TailwindVariant[];
    readonly backgroundColor: TailwindVariant[];
    readonly backgroundImage: TailwindVariant[];
    readonly backgroundOpacity: TailwindVariant[];
    readonly backgroundPosition: TailwindVariant[];
    readonly backgroundRepeat: TailwindVariant[];
    readonly backgroundSize: TailwindVariant[];
    readonly borderCollapse: TailwindVariant[];
    readonly borderColor: TailwindVariant[];
    readonly borderOpacity: TailwindVariant[];
    readonly borderRadius: TailwindVariant[];
    readonly borderStyle: TailwindVariant[];
    readonly borderWidth: TailwindVariant[];
    readonly boxShadow: TailwindVariant[];
    readonly boxSizing: TailwindVariant[];
    readonly clear: TailwindVariant[];
    readonly container: TailwindVariant[];
    readonly cursor: TailwindVariant[];
    readonly display: TailwindVariant[];
    readonly divideColor: TailwindVariant[];
    readonly divideOpacity: TailwindVariant[];
    readonly divideStyle: TailwindVariant[];
    readonly divideWidth: TailwindVariant[];
    readonly fill: TailwindVariant[];
    readonly flex: TailwindVariant[];
    readonly flexDirection: TailwindVariant[];
    readonly flexGrow: TailwindVariant[];
    readonly flexShrink: TailwindVariant[];
    readonly flexWrap: TailwindVariant[];
    readonly float: TailwindVariant[];
    readonly fontFamily: TailwindVariant[];
    readonly fontSize: TailwindVariant[];
    readonly fontSmoothing: TailwindVariant[];
    readonly fontStyle: TailwindVariant[];
    readonly fontVariantNumeric: TailwindVariant[];
    readonly fontWeight: TailwindVariant[];
    readonly gap: TailwindVariant[];
    readonly gradientColorStops: TailwindVariant[];
    readonly gridAutoColumns: TailwindVariant[];
    readonly gridAutoFlow: TailwindVariant[];
    readonly gridAutoRows: TailwindVariant[];
    readonly gridColumn: TailwindVariant[];
    readonly gridColumnEnd: TailwindVariant[];
    readonly gridColumnStart: TailwindVariant[];
    readonly gridRow: TailwindVariant[];
    readonly gridRowEnd: TailwindVariant[];
    readonly gridRowStart: TailwindVariant[];
    readonly gridTemplateColumns: TailwindVariant[];
    readonly gridTemplateRows: TailwindVariant[];
    readonly height: TailwindVariant[];
    readonly inset: TailwindVariant[];
    readonly justifyContent: TailwindVariant[];
    readonly justifyItems: TailwindVariant[];
    readonly justifySelf: TailwindVariant[];
    readonly letterSpacing: TailwindVariant[];
    readonly lineHeight: TailwindVariant[];
    readonly listStylePosition: TailwindVariant[];
    readonly listStyleType: TailwindVariant[];
    readonly margin: TailwindVariant[];
    readonly maxHeight: TailwindVariant[];
    readonly maxWidth: TailwindVariant[];
    readonly minHeight: TailwindVariant[];
    readonly minWidth: TailwindVariant[];
    readonly objectFit: TailwindVariant[];
    readonly objectPosition: TailwindVariant[];
    readonly opacity: TailwindVariant[];
    readonly order: TailwindVariant[];
    readonly outline: TailwindVariant[];
    readonly overflow: TailwindVariant[];
    readonly overscrollBehavior: TailwindVariant[];
    readonly padding: TailwindVariant[];
    readonly placeContent: TailwindVariant[];
    readonly placeItems: TailwindVariant[];
    readonly placeSelf: TailwindVariant[];
    readonly placeholderColor: TailwindVariant[];
    readonly placeholderOpacity: TailwindVariant[];
    readonly pointerEvents: TailwindVariant[];
    readonly position: TailwindVariant[];
    readonly resize: TailwindVariant[];
    readonly ringColor: TailwindVariant[];
    readonly ringOffsetColor: TailwindVariant[];
    readonly ringOffsetWidth: TailwindVariant[];
    readonly ringOpacity: TailwindVariant[];
    readonly ringWidth: TailwindVariant[];
    readonly rotate: TailwindVariant[];
    readonly scale: TailwindVariant[];
    readonly skew: TailwindVariant[];
    readonly space: TailwindVariant[];
    readonly stroke: TailwindVariant[];
    readonly strokeWidth: TailwindVariant[];
    readonly tableLayout: TailwindVariant[];
    readonly textAlign: TailwindVariant[];
    readonly textColor: TailwindVariant[];
    readonly textDecoration: TailwindVariant[];
    readonly textOpacity: TailwindVariant[];
    readonly textOverflow: TailwindVariant[];
    readonly textTransform: TailwindVariant[];
    readonly transform: TailwindVariant[];
    readonly transformOrigin: TailwindVariant[];
    readonly transitionDelay: TailwindVariant[];
    readonly transitionDuration: TailwindVariant[];
    readonly transitionProperty: TailwindVariant[];
    readonly transitionTimingFunction: TailwindVariant[];
    readonly translate: TailwindVariant[];
    readonly userSelect: TailwindVariant[];
    readonly verticalAlign: TailwindVariant[];
    readonly visibility: TailwindVariant[];
    readonly whitespace: TailwindVariant[];
    readonly width: TailwindVariant[];
    readonly wordBreak: TailwindVariant[];
    readonly zIndex: TailwindVariant[];
}>;

export interface TailwindConfig {
    theme: TailwindTheme;
    variants?: TailwindVariants;
    // https://tailwindcss.com/docs/presets#core-plugins
    corePlugins?:
        | TailwindCorePlugin[]
        | {
              [corePlugin in TailwindCorePlugin]?: boolean;
          };
    plugins?: TailwindPlugin[];
    purge?: string[] | TailwindPurgeConfig;
    // Not documented yet.
    content?: string[] | { files: string[]; extract: any; transform: any };
    presets?: TailwindConfig[];
    darkMode?: false | 'media' | 'class';
    variantOrder?: TailwindVariant[];
    prefix?: string;
    important?: boolean | string;
    separator?: string;
    safelist?: any[];
}
