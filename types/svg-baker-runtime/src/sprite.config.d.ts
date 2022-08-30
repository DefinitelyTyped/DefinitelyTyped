export interface SpriteConfig {
    attrs?: {
        /**
         * @default 'http://www.w3.org/2000/svg'
         */
        xmlns?: string;
        /**
         * @default 'http://www.w3.org/1999/xlink'
         */
        'xmlns:xlink'?: string;
        /**
         * @default ['position: absolute', 'width: 0', 'height: 0'].join('; ')
         */
        style?: string;
        /**
         * @default 'true'
         */
        'aria-hidden'?: string;
    };
}

declare const config: SpriteConfig;

export default config;
