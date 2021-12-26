// Type definitions for tinycon 0.6
// Project: https://github.com/tommoor/tinycon
// Definitions by: Daniel Waxweiler <https://github.com/dwaxweiler>
//                 Julian Hundeloh <https://github.com/jaulz>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Tinycon {
    interface TinyconStatic {
        setBubble(label: number | string | null, color?: string): TinyconStatic;
        setImage(url: string): TinyconStatic;
        setOptions(custom: TinyconOptions): TinyconStatic;
        reset: () => void;
    }
    interface TinyconOptions {
        /**
         * @default true
         */
        abbreviate?: boolean | undefined;
        /**
         * @default '#F03D25'
         */
        background?: string | undefined;
        /**
         * @default '#ffffff'
         */
        color?: string | undefined;
        /**
         * @default true
         */
        crossOrigin?: boolean | undefined;
        fallback?: boolean | "force" | undefined;
        font?: string | undefined;
        /**
         * @default 8
         */
        height?: number | undefined;
        /**
         * @default 7
         */
        width?: number | undefined;
    }
}

declare const Tinycon: Tinycon.TinyconStatic;

export as namespace Tinycon;
export = Tinycon;
