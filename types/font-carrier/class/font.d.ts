import Base = require('./base');
import FontFace = require('./fontface');
import Glyph = require('./glyph');

declare namespace Font {
    interface FontOptions {
        /** 字体的 postscript name，默认是 1024 */
        id: string;
        /** 字体的水平画布大小，默认是 1024 */
        horizAdvX: number;
        /** 字体的垂直画布大小，默认是 1024 */
        vertAdvY: number;
    }
    type FontType = 'ttf' | 'eot' | 'woff' | 'woff2' | 'svg';

    interface FileOptions {
        /** 支持文件地址，也支持文件 buffer */
        path?: string | Buffer;
        /** 导出的字体类型 */
        types?: FontType[];
    }
}

/** 一个 font 对象就表示解析后的字体对象，包含字体所有的信息 */
declare class Font extends Base<Font.FontOptions> {
    /** 获取对应的 fontface 对象 */
    getFontface(): FontFace;
    /** 设置对应的 fontface 对象 */
    setFontface(fontFace: FontFace | FontFace.FontFaceOptions): void;
    /** 获取指定文字（keys）的 SVG。 */
    getSvg(keys: string): string | Map<string, string>;
    /** 用于针对字设置对应的 SVG 图形 key是对应的字，也可以是 unicode, value是对应的svg图形 */
    setSvg(key: string, value: string): void;
    /** 用于针对字设置对应的 SVG 图形, 可用于设置多个 */
    setSvg(obj: Record<string, string>): void;
    /** 获取指定文字（keys）的 glyph 对象, 如果是单个字就返回一个 glyph 对象，否则返回一个 hash 对象，key 是 unicode，value 是对应的 glyph 对象 */
    getGlyph(keys: string | string[]): Glyph | Record<string, Glyph>;
    /** 用于针对字设置对应的 glyph 对象 */
    setGlyph(key: string, value: Glyph | Glyph.GlyphOptions): void;
    /** 用于针对字设置对应的 glyph 对象 */
    setGlyph(arg0: Record<string, Glyph | Glyph.GlyphOptions>): void;
    /** 返回所有的字体对象集合 */
    allGlyph(): Record<string, Glyph>;
    /** 将当前字体解析成对应svg字体的字符串并返回 */
    toString(): string;
    /** 将当前字体的所有字形清空 */
    clean(): Font;
    /**
     * 精简当前字体
     * @param input input 是一个字符串，支持 unicode，会去掉 font 里面除 input 用到的字形之外所有的字形
     */
    min(input: string): Font;
    /**
     * 导出字体
     * @param options
     */
    output(options?: Font.FileOptions): Buffer[];
}

export = Font;
