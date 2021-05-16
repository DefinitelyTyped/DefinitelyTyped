export type Variant =
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

export interface TailwindColorGroup {
    readonly '50': string;
    readonly '100': string;
    readonly '200': string;
    readonly '300': string;
    readonly '400': string;
    readonly '500': string;
    readonly '600': string;
    readonly '700': string;
    readonly '800': string;
    readonly '900': string;
    readonly [key: string]: string;
}

export interface TailwindStandardSpacing {
    readonly '0': string;
    readonly '1': string;
    readonly '2': string;
    readonly '3': string;
    readonly '4': string;
    readonly '5': string;
    readonly '6': string;
    readonly '7': string;
    readonly '8': string;
    readonly '9': string;
    readonly '10': string;
    readonly '11': string;
    readonly '12': string;
    readonly '14': string;
    readonly '16': string;
    readonly '20': string;
    readonly '24': string;
    readonly '28': string;
    readonly '32': string;
    readonly '36': string;
    readonly '40': string;
    readonly '44': string;
    readonly '48': string;
    readonly '52': string;
    readonly '56': string;
    readonly '60': string;
    readonly '64': string;
    readonly '72': string;
    readonly '80': string;
    readonly '96': string;
    readonly px: string;
    readonly '0.5': string;
    readonly '1.5': string;
    readonly '2.5': string;
    readonly '3.5': string;
}

export type TailwindStandardNegativeSpacing = {
    [key in keyof TailwindStandardSpacing as `-${key}`]: string;
};

export interface TailwindAnimationConfig {
    [key: string]: {
        transform?: string;
        opacity?: string;
        animationTimingFunction?: string;
    };
}

export type TailwindFontConfig = [
    string,
    {
        lineHeight: string;
    },
];

export interface TailwindColorConfig {
    readonly transparent: string;
    readonly current: string;
    readonly black: string;
    readonly white: string;
    readonly gray: TailwindColorGroup;
    readonly red: TailwindColorGroup;
    readonly yellow: TailwindColorGroup;
    readonly green: TailwindColorGroup;
    readonly blue: TailwindColorGroup;
    readonly indigo: TailwindColorGroup;
    readonly purple: TailwindColorGroup;
    readonly pink: TailwindColorGroup;
}

export interface TailwindConfig {
    readonly theme: {
        readonly extend: Omit<TailwindConfig['theme'], 'extend'>
        readonly screens: {
            readonly sm: string;
            readonly md: string;
            readonly lg: string;
            readonly xl: string;
            readonly '2xl': string;
            readonly [key: string]: string;
        };
        readonly colors: TailwindColorConfig;
        readonly spacing: TailwindStandardSpacing & {
            readonly [key: string]: string;
        };
        readonly animation: {
            readonly none: string;
            readonly spin: string;
            readonly ping: string;
            readonly pulse: string;
            readonly bounce: string;
        };
        readonly backgroundColor: {
            readonly transparent: string;
            readonly current: string;
            readonly black: string;
            readonly white: string;
            readonly gray: TailwindColorGroup;
            readonly red: TailwindColorGroup;
            readonly yellow: TailwindColorGroup;
            readonly green: TailwindColorGroup;
            readonly blue: TailwindColorGroup;
            readonly indigo: TailwindColorGroup;
            readonly purple: TailwindColorGroup;
            readonly pink: TailwindColorGroup;
        };
        readonly backgroundImage: {
            readonly none: string;
            readonly 'gradient-to-t': string;
            readonly 'gradient-to-tr': string;
            readonly 'gradient-to-r': string;
            readonly 'gradient-to-br': string;
            readonly 'gradient-to-b': string;
            readonly 'gradient-to-bl': string;
            readonly 'gradient-to-l': string;
            readonly 'gradient-to-tl': string;
        };
        readonly backgroundOpacity: {
            readonly '0': string;
            readonly '5': string;
            readonly '10': string;
            readonly '20': string;
            readonly '25': string;
            readonly '30': string;
            readonly '40': string;
            readonly '50': string;
            readonly '60': string;
            readonly '70': string;
            readonly '75': string;
            readonly '80': string;
            readonly '90': string;
            readonly '95': string;
            readonly '100': string;
        };
        readonly backgroundPosition: {
            readonly bottom: string;
            readonly center: string;
            readonly left: string;
            readonly 'left-bottom': string;
            readonly 'left-top': string;
            readonly right: string;
            readonly 'right-bottom': string;
            readonly 'right-top': string;
            readonly top: string;
        };
        readonly backgroundSize: {
            readonly auto: string;
            readonly cover: string;
            readonly contain: string;
        };
        readonly borderColor: {
            readonly transparent: string;
            readonly current: string;
            readonly black: string;
            readonly white: string;
            readonly gray: TailwindColorGroup;
            readonly red: TailwindColorGroup;
            readonly yellow: TailwindColorGroup;
            readonly green: TailwindColorGroup;
            readonly blue: TailwindColorGroup;
            readonly indigo: TailwindColorGroup;
            readonly purple: TailwindColorGroup;
            readonly pink: TailwindColorGroup;
            readonly DEFAULT: string;
            readonly [key: string]: string | TailwindColorGroup;
        };
        readonly borderOpacity: {
            readonly '0': string;
            readonly '5': string;
            readonly '10': string;
            readonly '20': string;
            readonly '25': string;
            readonly '30': string;
            readonly '40': string;
            readonly '50': string;
            readonly '60': string;
            readonly '70': string;
            readonly '75': string;
            readonly '80': string;
            readonly '90': string;
            readonly '95': string;
            readonly '100': string;
            readonly [key: string]: string;
        };
        readonly borderRadius: {
            readonly none: string;
            readonly sm: string;
            readonly DEFAULT: string;
            readonly md: string;
            readonly lg: string;
            readonly xl: string;
            readonly '2xl': string;
            readonly '3xl': string;
            readonly full: string;
            readonly [key: string]: string;
        };
        readonly borderWidth: {
            readonly '0': string;
            readonly '2': string;
            readonly '4': string;
            readonly '8': string;
            readonly DEFAULT: string;
            readonly [key: string]: string;
        };
        readonly boxShadow: {
            readonly sm: string;
            readonly DEFAULT: string;
            readonly md: string;
            readonly lg: string;
            readonly xl: string;
            readonly '2xl': string;
            readonly inner: string;
            readonly none: string;
            readonly [key: string]: string;
        };
        readonly container: {
            readonly [key: string]: string;
        };
        readonly cursor: {
            readonly auto: string;
            readonly default: string;
            readonly pointer: string;
            readonly wait: string;
            readonly text: string;
            readonly move: string;
            readonly 'not-allowed': string;
        };
        readonly divideColor: {
            readonly transparent: string;
            readonly current: string;
            readonly black: string;
            readonly white: string;
            readonly gray: TailwindColorGroup;
            readonly red: TailwindColorGroup;
            readonly yellow: TailwindColorGroup;
            readonly green: TailwindColorGroup;
            readonly blue: TailwindColorGroup;
            readonly indigo: TailwindColorGroup;
            readonly purple: TailwindColorGroup;
            readonly pink: TailwindColorGroup;
            readonly DEFAULT: string;
            readonly [key: string]: string | TailwindColorGroup;
        };
        readonly divideOpacity: {
            readonly '0': string;
            readonly '5': string;
            readonly '10': string;
            readonly '20': string;
            readonly '25': string;
            readonly '30': string;
            readonly '40': string;
            readonly '50': string;
            readonly '60': string;
            readonly '70': string;
            readonly '75': string;
            readonly '80': string;
            readonly '90': string;
            readonly '95': string;
            readonly '100': string;
            readonly [key: string]: string;
        };
        readonly divideWidth: {
            readonly '0': string;
            readonly '2': string;
            readonly '4': string;
            readonly '8': string;
            readonly DEFAULT: string;
            readonly [key: string]: string;
        };
        readonly fill: {
            current: string;
        };
        readonly flex: {
            readonly '1': string;
            readonly auto: string;
            readonly initial: string;
            readonly none: string;
            readonly [key: string]: string;
        };
        readonly flexGrow: {
            readonly '0': string;
            readonly DEFAULT: string;
        };
        readonly flexShrink: {
            readonly '0': string;
            readonly DEFAULT: string;
        };
        readonly fontFamily: {
            readonly sans: string[];
            readonly serif: string[];
            readonly mono: string[];
            readonly [key: string]: string[];
        };
        readonly fontSize: {
            readonly xs: TailwindFontConfig;
            readonly sm: TailwindFontConfig;
            readonly base: TailwindFontConfig;
            readonly lg: TailwindFontConfig;
            readonly xl: TailwindFontConfig;
            readonly '2xl': TailwindFontConfig;
            readonly '3xl': TailwindFontConfig;
            readonly '4xl': TailwindFontConfig;
            readonly '5xl': TailwindFontConfig;
            readonly '6xl': TailwindFontConfig;
            readonly '7xl': TailwindFontConfig;
            readonly '8xl': TailwindFontConfig;
            readonly '9xl': TailwindFontConfig;
            readonly [key: string]: TailwindFontConfig;
        };
        readonly fontWeight: {
            readonly thin: string;
            readonly extralight: string;
            readonly light: string;
            readonly normal: string;
            readonly medium: string;
            readonly semibold: string;
            readonly bold: string;
            readonly extrabold: string;
            readonly black: string;
        };
        readonly gap: TailwindStandardSpacing;
        readonly gradientColorStops: {
            readonly transparent: string;
            readonly current: string;
            readonly black: string;
            readonly white: string;
            readonly gray: TailwindColorGroup;
            readonly red: TailwindColorGroup;
            readonly yellow: TailwindColorGroup;
            readonly green: TailwindColorGroup;
            readonly blue: TailwindColorGroup;
            readonly indigo: TailwindColorGroup;
            readonly purple: TailwindColorGroup;
            readonly pink: TailwindColorGroup;
            readonly [key: string]: string | TailwindColorGroup;
        };
        readonly gridAutoColumns: {
            readonly auto: string;
            readonly min: string;
            readonly max: string;
            readonly fr: string;
        };
        readonly gridAutoRows: {
            readonly auto: string;
            readonly min: string;
            readonly max: string;
            readonly fr: string;
        };
        readonly gridColumn: {
            readonly auto: string;
            readonly 'span-1': string;
            readonly 'span-2': string;
            readonly 'span-3': string;
            readonly 'span-4': string;
            readonly 'span-5': string;
            readonly 'span-6': string;
            readonly 'span-7': string;
            readonly 'span-8': string;
            readonly 'span-9': string;
            readonly 'span-10': string;
            readonly 'span-11': string;
            readonly 'span-12': string;
            readonly 'span-full': string;
        };
        readonly gridColumnEnd: {
            readonly '1': string;
            readonly '2': string;
            readonly '3': string;
            readonly '4': string;
            readonly '5': string;
            readonly '6': string;
            readonly '7': string;
            readonly '8': string;
            readonly '9': string;
            readonly '10': string;
            readonly '11': string;
            readonly '12': string;
            readonly '13': string;
            readonly auto: string;
        };
        readonly gridColumnStart: {
            readonly '1': string;
            readonly '2': string;
            readonly '3': string;
            readonly '4': string;
            readonly '5': string;
            readonly '6': string;
            readonly '7': string;
            readonly '8': string;
            readonly '9': string;
            readonly '10': string;
            readonly '11': string;
            readonly '12': string;
            readonly '13': string;
            readonly auto: string;
        };
        readonly gridRow: {
            readonly auto: string;
            readonly 'span-1': string;
            readonly 'span-2': string;
            readonly 'span-3': string;
            readonly 'span-4': string;
            readonly 'span-5': string;
            readonly 'span-6': string;
            readonly 'span-full': string;
        };
        readonly gridRowStart: {
            readonly '1': string;
            readonly '2': string;
            readonly '3': string;
            readonly '4': string;
            readonly '5': string;
            readonly '6': string;
            readonly '7': string;
            readonly auto: string;
        };
        readonly gridRowEnd: {
            readonly '1': string;
            readonly '2': string;
            readonly '3': string;
            readonly '4': string;
            readonly '5': string;
            readonly '6': string;
            readonly '7': string;
            readonly auto: string;
        };
        readonly transformOrigin: {
            readonly center: string;
            readonly top: string;
            readonly 'top-right': string;
            readonly right: string;
            readonly 'bottom-right': string;
            readonly bottom: string;
            readonly 'bottom-left': string;
            readonly left: string;
            readonly 'top-left': string;
        };
        readonly gridTemplateColumns: {
            readonly '1': string;
            readonly '2': string;
            readonly '3': string;
            readonly '4': string;
            readonly '5': string;
            readonly '6': string;
            readonly '7': string;
            readonly '8': string;
            readonly '9': string;
            readonly '10': string;
            readonly '11': string;
            readonly '12': string;
            readonly none: string;
        };
        readonly gridTemplateRows: {
            readonly '1': string;
            readonly '2': string;
            readonly '3': string;
            readonly '4': string;
            readonly '5': string;
            readonly '6': string;
            readonly none: string;
        };
        readonly height: TailwindStandardSpacing & {
            readonly auto: string;
            readonly '1/2': string;
            readonly '1/3': string;
            readonly '2/3': string;
            readonly '1/4': string;
            readonly '2/4': string;
            readonly '3/4': string;
            readonly '1/5': string;
            readonly '2/5': string;
            readonly '3/5': string;
            readonly '4/5': string;
            readonly '1/6': string;
            readonly '2/6': string;
            readonly '3/6': string;
            readonly '4/6': string;
            readonly '5/6': string;
            readonly full: string;
            readonly screen: string;
        };
        readonly inset: TailwindStandardSpacing &
            TailwindStandardNegativeSpacing & {
                readonly auto: string;
                readonly '1/2': string;
                readonly '1/3': string;
                readonly '2/3': string;
                readonly '1/4': string;
                readonly '2/4': string;
                readonly '3/4': string;
                readonly full: string;
                readonly '-1/2': string;
                readonly '-1/3': string;
                readonly '-2/3': string;
                readonly '-1/4': string;
                readonly '-2/4': string;
                readonly '-3/4': string;
                readonly '-full': string;
            };
        readonly keyframes: {
            readonly spin: TailwindAnimationConfig;
            readonly ping: TailwindAnimationConfig;
            readonly pulse: TailwindAnimationConfig;
            readonly bounce: TailwindAnimationConfig;
        };
        readonly letterSpacing: {
            readonly tighter: string;
            readonly tight: string;
            readonly normal: string;
            readonly wide: string;
            readonly wider: string;
            readonly widest: string;
        };
        readonly lineHeight: {
            readonly '3': string;
            readonly '4': string;
            readonly '5': string;
            readonly '6': string;
            readonly '7': string;
            readonly '8': string;
            readonly '9': string;
            readonly '10': string;
            readonly none: string;
            readonly tight: string;
            readonly snug: string;
            readonly normal: string;
            readonly relaxed: string;
            readonly loose: string;
        };
        readonly listStyleType: {
            readonly none: string;
            readonly disc: string;
            readonly decimal: string;
        };
        readonly margin: TailwindStandardSpacing &
            TailwindStandardNegativeSpacing & {
                readonly auto: string;
            };
        readonly maxHeight: TailwindStandardSpacing & {
            readonly full: string;
            readonly screen: string;
        };
        readonly maxWidth: {
            readonly '0': string;
            readonly none: string;
            readonly xs: string;
            readonly sm: string;
            readonly md: string;
            readonly lg: string;
            readonly xl: string;
            readonly '2xl': string;
            readonly '3xl': string;
            readonly '4xl': string;
            readonly '5xl': string;
            readonly '6xl': string;
            readonly '7xl': string;
            readonly full: string;
            readonly min: string;
            readonly max: string;
            readonly prose: string;
            readonly 'screen-sm': string;
            readonly 'screen-md': string;
            readonly 'screen-lg': string;
            readonly 'screen-xl': string;
            readonly 'screen-2xl': string;
        };
        readonly minHeight: {
            readonly '0': string;
            readonly full: string;
            readonly screen: string;
        };
        readonly minWidth: {
            readonly '0': string;
            readonly full: string;
            readonly min: string;
            readonly max: string;
        };
        readonly objectPosition: {
            readonly bottom: string;
            readonly center: string;
            readonly left: string;
            readonly 'left-bottom': string;
            readonly 'left-top': string;
            readonly right: string;
            readonly 'right-bottom': string;
            readonly 'right-top': string;
            readonly top: string;
        };
        readonly opacity: {
            readonly '0': string;
            readonly '5': string;
            readonly '10': string;
            readonly '20': string;
            readonly '25': string;
            readonly '30': string;
            readonly '40': string;
            readonly '50': string;
            readonly '60': string;
            readonly '70': string;
            readonly '75': string;
            readonly '80': string;
            readonly '90': string;
            readonly '95': string;
            readonly '100': string;
        };
        readonly order: {
            readonly '1': string;
            readonly '2': string;
            readonly '3': string;
            readonly '4': string;
            readonly '5': string;
            readonly '6': string;
            readonly '7': string;
            readonly '8': string;
            readonly '9': string;
            readonly '10': string;
            readonly '11': string;
            readonly '12': string;
            readonly first: string;
            readonly last: string;
            readonly none: string;
        };
        readonly outline: {
            readonly none: string[];
            readonly white: string[];
            readonly black: string[];
        };
        readonly padding: TailwindStandardSpacing;
        readonly placeholderColor: {
            readonly transparent: string;
            readonly current: string;
            readonly black: string;
            readonly white: string;
            readonly gray: TailwindColorGroup;
            readonly red: TailwindColorGroup;
            readonly yellow: TailwindColorGroup;
            readonly green: TailwindColorGroup;
            readonly blue: TailwindColorGroup;
            readonly indigo: TailwindColorGroup;
            readonly purple: TailwindColorGroup;
            readonly pink: TailwindColorGroup;
            readonly [key: string]: string | TailwindColorGroup;
        };
        readonly placeholderOpacity: {
            readonly '0': string;
            readonly '5': string;
            readonly '10': string;
            readonly '20': string;
            readonly '25': string;
            readonly '30': string;
            readonly '40': string;
            readonly '50': string;
            readonly '60': string;
            readonly '70': string;
            readonly '75': string;
            readonly '80': string;
            readonly '90': string;
            readonly '95': string;
            readonly '100': string;
        };
        readonly ringColor: {
            readonly DEFAULT: string;
            readonly transparent: string;
            readonly current: string;
            readonly black: string;
            readonly white: string;
            readonly gray: TailwindColorGroup;
            readonly red: TailwindColorGroup;
            readonly yellow: TailwindColorGroup;
            readonly green: TailwindColorGroup;
            readonly blue: TailwindColorGroup;
            readonly indigo: TailwindColorGroup;
            readonly purple: TailwindColorGroup;
            readonly pink: TailwindColorGroup;
            readonly [key: string]: string | TailwindColorGroup;
        };
        readonly ringOffsetColor: {
            readonly transparent: string;
            readonly current: string;
            readonly black: string;
            readonly white: string;
            readonly gray: TailwindColorGroup;
            readonly red: TailwindColorGroup;
            readonly yellow: TailwindColorGroup;
            readonly green: TailwindColorGroup;
            readonly blue: TailwindColorGroup;
            readonly indigo: TailwindColorGroup;
            readonly purple: TailwindColorGroup;
            readonly pink: TailwindColorGroup;
            readonly [key: string]: string | TailwindColorGroup;
        };
        readonly ringOffsetWidth: {
            readonly '0': string;
            readonly '1': string;
            readonly '2': string;
            readonly '4': string;
            readonly '8': string;
            readonly [key: string]: string;
        };
        readonly ringOpacity: {
            readonly '0': string;
            readonly '5': string;
            readonly '10': string;
            readonly '20': string;
            readonly '25': string;
            readonly '30': string;
            readonly '40': string;
            readonly '50': string;
            readonly '60': string;
            readonly '70': string;
            readonly '75': string;
            readonly '80': string;
            readonly '90': string;
            readonly '95': string;
            readonly '100': string;
            readonly DEFAULT: string;
        };
        readonly ringWidth: {
            readonly '0': string;
            readonly '1': string;
            readonly '2': string;
            readonly '4': string;
            readonly '8': string;
            readonly DEFAULT: string;
        };
        readonly rotate: {
            readonly '0': string;
            readonly '1': string;
            readonly '2': string;
            readonly '3': string;
            readonly '6': string;
            readonly '12': string;
            readonly '45': string;
            readonly '90': string;
            readonly '180': string;
            readonly '-180': string;
            readonly '-90': string;
            readonly '-45': string;
            readonly '-12': string;
            readonly '-6': string;
            readonly '-3': string;
            readonly '-2': string;
            readonly '-1': string;
        };
        readonly scale: {
            readonly '0': string;
            readonly '50': string;
            readonly '75': string;
            readonly '90': string;
            readonly '95': string;
            readonly '100': string;
            readonly '105': string;
            readonly '110': string;
            readonly '125': string;
            readonly '150': string;
        };
        readonly skew: {
            readonly '0': string;
            readonly '1': string;
            readonly '2': string;
            readonly '3': string;
            readonly '6': string;
            readonly '12': string;
            readonly '-12': string;
            readonly '-6': string;
            readonly '-3': string;
            readonly '-2': string;
            readonly '-1': string;
        };
        readonly space: TailwindStandardSpacing & TailwindStandardNegativeSpacing;
        readonly stroke: {
            readonly current: string;
        };
        readonly strokeWidth: {
            readonly '0': string;
            readonly '1': string;
            readonly '2': string;
        };
        readonly textColor: {
            readonly transparent: string;
            readonly current: string;
            readonly black: string;
            readonly white: string;
            readonly gray: TailwindColorGroup;
            readonly red: TailwindColorGroup;
            readonly yellow: TailwindColorGroup;
            readonly green: TailwindColorGroup;
            readonly blue: TailwindColorGroup;
            readonly indigo: TailwindColorGroup;
            readonly purple: TailwindColorGroup;
            readonly pink: TailwindColorGroup;
        };
        readonly textOpacity: {
            readonly '0': string;
            readonly '5': string;
            readonly '10': string;
            readonly '20': string;
            readonly '25': string;
            readonly '30': string;
            readonly '40': string;
            readonly '50': string;
            readonly '60': string;
            readonly '70': string;
            readonly '75': string;
            readonly '80': string;
            readonly '90': string;
            readonly '95': string;
            readonly '100': string;
        };
        readonly transitionDuration: {
            readonly '75': string;
            readonly '100': string;
            readonly '150': string;
            readonly '200': string;
            readonly '300': string;
            readonly '500': string;
            readonly '700': string;
            readonly '1000': string;
            readonly DEFAULT: string;
        };
        readonly transitionDelay: {
            readonly '75': string;
            readonly '100': string;
            readonly '150': string;
            readonly '200': string;
            readonly '300': string;
            readonly '500': string;
            readonly '700': string;
            readonly '1000': string;
        };
        readonly transitionProperty: {
            readonly none: string;
            readonly all: string;
            readonly DEFAULT: string;
            readonly colors: string;
            readonly opacity: string;
            readonly shadow: string;
            readonly transform: string;
        };
        readonly transitionTimingFunction: {
            readonly DEFAULT: string;
            readonly linear: string;
            readonly in: string;
            readonly out: string;
            readonly 'in-out': string;
        };
        readonly translate: TailwindStandardSpacing &
            TailwindStandardNegativeSpacing & {
                readonly '1/2': string;
                readonly '1/3': string;
                readonly '2/3': string;
                readonly '1/4': string;
                readonly '2/4': string;
                readonly '3/4': string;
                readonly full: string;
                readonly '-1/2': string;
                readonly '-1/3': string;
                readonly '-2/3': string;
                readonly '-1/4': string;
                readonly '-2/4': string;
                readonly '-3/4': string;
                readonly '-full': string;
            };
        readonly width: TailwindStandardSpacing & {
            readonly auto: string;
            readonly '1/2': string;
            readonly '1/3': string;
            readonly '2/3': string;
            readonly '1/4': string;
            readonly '2/4': string;
            readonly '3/4': string;
            readonly '1/5': string;
            readonly '2/5': string;
            readonly '3/5': string;
            readonly '4/5': string;
            readonly '1/6': string;
            readonly '2/6': string;
            readonly '3/6': string;
            readonly '4/6': string;
            readonly '5/6': string;
            readonly '1/12': string;
            readonly '2/12': string;
            readonly '3/12': string;
            readonly '4/12': string;
            readonly '5/12': string;
            readonly '6/12': string;
            readonly '7/12': string;
            readonly '8/12': string;
            readonly '9/12': string;
            readonly '10/12': string;
            readonly '11/12': string;
            readonly full: string;
            readonly screen: string;
            readonly min: string;
            readonly max: string;
        };
        readonly zIndex: {
            readonly '0': string;
            readonly '10': string;
            readonly '20': string;
            readonly '30': string;
            readonly '40': string;
            readonly '50': string;
            readonly auto: string;
        };
    };
    readonly variants: {
        readonly extend: Omit<TailwindConfig['variants'], 'extend'>
        readonly accessibility: Variant[];
        readonly alignContent: Variant[];
        readonly alignItems: Variant[];
        readonly alignSelf: Variant[];
        readonly animation: Variant[];
        readonly appearance: Variant[];
        readonly backgroundAttachment: Variant[];
        readonly backgroundClip: Variant[];
        readonly backgroundColor: Variant[];
        readonly backgroundImage: Variant[];
        readonly backgroundOpacity: Variant[];
        readonly backgroundPosition: Variant[];
        readonly backgroundRepeat: Variant[];
        readonly backgroundSize: Variant[];
        readonly borderCollapse: Variant[];
        readonly borderColor: Variant[];
        readonly borderOpacity: Variant[];
        readonly borderRadius: Variant[];
        readonly borderStyle: Variant[];
        readonly borderWidth: Variant[];
        readonly boxShadow: Variant[];
        readonly boxSizing: Variant[];
        readonly clear: Variant[];
        readonly container: Variant[];
        readonly cursor: Variant[];
        readonly display: Variant[];
        readonly divideColor: Variant[];
        readonly divideOpacity: Variant[];
        readonly divideStyle: Variant[];
        readonly divideWidth: Variant[];
        readonly fill: Variant[];
        readonly flex: Variant[];
        readonly flexDirection: Variant[];
        readonly flexGrow: Variant[];
        readonly flexShrink: Variant[];
        readonly flexWrap: Variant[];
        readonly float: Variant[];
        readonly fontFamily: Variant[];
        readonly fontSize: Variant[];
        readonly fontSmoothing: Variant[];
        readonly fontStyle: Variant[];
        readonly fontVariantNumeric: Variant[];
        readonly fontWeight: Variant[];
        readonly gap: Variant[];
        readonly gradientColorStops: Variant[];
        readonly gridAutoColumns: Variant[];
        readonly gridAutoFlow: Variant[];
        readonly gridAutoRows: Variant[];
        readonly gridColumn: Variant[];
        readonly gridColumnEnd: Variant[];
        readonly gridColumnStart: Variant[];
        readonly gridRow: Variant[];
        readonly gridRowEnd: Variant[];
        readonly gridRowStart: Variant[];
        readonly gridTemplateColumns: Variant[];
        readonly gridTemplateRows: Variant[];
        readonly height: Variant[];
        readonly inset: Variant[];
        readonly justifyContent: Variant[];
        readonly justifyItems: Variant[];
        readonly justifySelf: Variant[];
        readonly letterSpacing: Variant[];
        readonly lineHeight: Variant[];
        readonly listStylePosition: Variant[];
        readonly listStyleType: Variant[];
        readonly margin: Variant[];
        readonly maxHeight: Variant[];
        readonly maxWidth: Variant[];
        readonly minHeight: Variant[];
        readonly minWidth: Variant[];
        readonly objectFit: Variant[];
        readonly objectPosition: Variant[];
        readonly opacity: Variant[];
        readonly order: Variant[];
        readonly outline: Variant[];
        readonly overflow: Variant[];
        readonly overscrollBehavior: Variant[];
        readonly padding: Variant[];
        readonly placeContent: Variant[];
        readonly placeItems: Variant[];
        readonly placeSelf: Variant[];
        readonly placeholderColor: Variant[];
        readonly placeholderOpacity: Variant[];
        readonly pointerEvents: Variant[];
        readonly position: Variant[];
        readonly resize: Variant[];
        readonly ringColor: Variant[];
        readonly ringOffsetColor: Variant[];
        readonly ringOffsetWidth: Variant[];
        readonly ringOpacity: Variant[];
        readonly ringWidth: Variant[];
        readonly rotate: Variant[];
        readonly scale: Variant[];
        readonly skew: Variant[];
        readonly space: Variant[];
        readonly stroke: Variant[];
        readonly strokeWidth: Variant[];
        readonly tableLayout: Variant[];
        readonly textAlign: Variant[];
        readonly textColor: Variant[];
        readonly textDecoration: Variant[];
        readonly textOpacity: Variant[];
        readonly textOverflow: Variant[];
        readonly textTransform: Variant[];
        readonly transform: Variant[];
        readonly transformOrigin: Variant[];
        readonly transitionDelay: Variant[];
        readonly transitionDuration: Variant[];
        readonly transitionProperty: Variant[];
        readonly transitionTimingFunction: Variant[];
        readonly translate: Variant[];
        readonly userSelect: Variant[];
        readonly verticalAlign: Variant[];
        readonly visibility: Variant[];
        readonly whitespace: Variant[];
        readonly width: Variant[];
        readonly wordBreak: Variant[];
        readonly zIndex: Variant[];
    };
    readonly corePlugins: [
        'preflight',
        'container',
        'space',
        'divideWidth',
        'divideColor',
        'divideStyle',
        'divideOpacity',
        'accessibility',
        'appearance',
        'backgroundAttachment',
        'backgroundClip',
        'backgroundColor',
        'backgroundImage',
        'gradientColorStops',
        'backgroundOpacity',
        'backgroundPosition',
        'backgroundRepeat',
        'backgroundSize',
        'borderCollapse',
        'borderColor',
        'borderOpacity',
        'borderRadius',
        'borderStyle',
        'borderWidth',
        'boxSizing',
        'cursor',
        'display',
        'flexDirection',
        'flexWrap',
        'placeItems',
        'placeContent',
        'placeSelf',
        'alignItems',
        'alignContent',
        'alignSelf',
        'justifyItems',
        'justifyContent',
        'justifySelf',
        'flex',
        'flexGrow',
        'flexShrink',
        'order',
        'float',
        'clear',
        'fontFamily',
        'fontWeight',
        'height',
        'fontSize',
        'lineHeight',
        'listStylePosition',
        'listStyleType',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'objectFit',
        'objectPosition',
        'opacity',
        'outline',
        'overflow',
        'overscrollBehavior',
        'padding',
        'placeholderColor',
        'placeholderOpacity',
        'pointerEvents',
        'position',
        'inset',
        'resize',
        'boxShadow',
        'ringWidth',
        'ringOffsetColor',
        'ringOffsetWidth',
        'ringColor',
        'ringOpacity',
        'fill',
        'stroke',
        'strokeWidth',
        'tableLayout',
        'textAlign',
        'textColor',
        'textOpacity',
        'textOverflow',
        'fontStyle',
        'textTransform',
        'textDecoration',
        'fontSmoothing',
        'fontVariantNumeric',
        'letterSpacing',
        'userSelect',
        'verticalAlign',
        'visibility',
        'whitespace',
        'wordBreak',
        'width',
        'zIndex',
        'gap',
        'gridAutoFlow',
        'gridTemplateColumns',
        'gridAutoColumns',
        'gridColumn',
        'gridColumnStart',
        'gridColumnEnd',
        'gridTemplateRows',
        'gridAutoRows',
        'gridRow',
        'gridRowStart',
        'gridRowEnd',
        'transform',
        'transformOrigin',
        'scale',
        'rotate',
        'translate',
        'skew',
        'transitionProperty',
        'transitionTimingFunction',
        'transitionDuration',
        'transitionDelay',
        'animation',
    ];
    readonly plugins: [];
    readonly purge: [];
    readonly presets: [];
    readonly darkMode: false;
    readonly variantOrder: Variant[];
    readonly prefix: string;
    readonly important: false;
    readonly separator: string;
}
