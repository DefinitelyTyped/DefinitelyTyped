// Type definitions for font-carrier 0.3
// Project: https://github.com/purplebamboo/font-carrier#readme
// Definitions by: zfitness <https://github.com/zFitness>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

// tslint:disable-next-line: no-declare-current-package no-single-declare-module
declare module 'font-carrier' {
    type FontType = 'ttf' | 'eot' | 'woff' | 'woff2' | 'svg';

    interface FileOptions {
        path?: string;
        types?: FontType[];
    }

    class Base<T> {
        options: T;
        setOptions(options: T): void;
        defaultOptions: T;
        get(key: string): string | number;
        set(key: string, value: string | number): void;
        init(options: T): void;
        constructor(arg0: T);
    }

    namespace FontCarrier {
        interface FontOptions {
            id: string;
            horizAdvX: number;
            vertAdvY: number;
        }

        interface GlyphOptions {
            unicode: string;
            glyphName: string;
            d: string;
            horizAdvX: number;
            vertAdvY: number;
        }

        interface FontFaceOptions {
            fontFamily: string;
            fontWeight: string;
            fontStretch: string;
            unitsPerEm: string;
            ascent: string;
            descent: string;
        }
        /**
         * glyph 字形对象代表了具体某个字的信息。
         */
        class Glyph extends Base<GlyphOptions> {
            /**
             * 获取当前字形对应的字体对象
             */
            getFont(): Font;
            /**
             * 设置当前 glyph 的字体，会按照新的字体做一系列的变换
             * @param font
             */
            setFont(font: Font): void;
            /**
             * 导出当前字形对象的 SVG
             * @param path
             * @param options
             */
            toSvg(
                options?: Partial<{
                    path: string;
                    width: number;
                    height: number;
                    skipViewport: string;
                }>,
            ): string;
        }

        class FontFace extends Base<FontFaceOptions> {}

        class Font extends Base<FontOptions> {
            getFontface(): FontFace;
            setFontface(fontFace: FontFace | FontFaceOptions): void;
            getSvg(keys: string): string | Map<string, string>;
            setSvg(key: string, value: string): void;
            setSvg(obj: Record<string, string>): void;
            getGlyph(keys: string | string[]): Glyph | Record<string, Glyph>;
            setGlyph(key: string, value: Glyph | GlyphOptions): void;
            setGlyph(arg0: Record<string, Glyph | GlyphOptions>): void;
            allGlyph(): Record<string, Glyph>;
            /**
             * 将当前字体解析成对应svg字体的字符串并返回
             */
            toString(): string;
            /**
             * 将当前字体的所有字形清空
             */
            clean(): Font;
            /**
             * 精简当前字体,
             * input 是一个字符串，支持 unicode，会去掉 font 里面除 input 用到的字形之外所有的字形
             * @param input
             */
            min(input: string): Font;
            /**
             * 导出字体
             * @param options
             */
            output(options?: FileOptions): Buffer[];
        }

        /**
         * 生成一个空白字体对像
         * @param options
         */
        function create(options?: FileOptions): Font;
        /**
         * 解析一个已有字体，支持svg,ttf的字体
         * @param input
         */
        function transfer(path: string | Buffer, options?: FontOptions): Font;
    }

    export = FontCarrier;
}
