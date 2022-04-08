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
        abbreviate?: boolean;
        /**
         * @default '#F03D25'
         */
        background?: string;
        /**
         * @default '#ffffff'
         */
        color?: string;
        /**
         * @default true
         */
        crossOrigin?: boolean;
        fallback?: boolean | "force";
        font?: string;
        /**
         * @default 8
         */
        height?: number;
        /**
         * @default 7
         */
        width?: number;
    }
}

declare const Tinycon: Tinycon.TinyconStatic;

export as namespace Tinycon;
export = Tinycon;
