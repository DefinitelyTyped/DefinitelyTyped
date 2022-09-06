// Type definitions for font-carrier 0.3
// Project: https://github.com/purplebamboo/font-carrier#readme
// Definitions by: zfitness <https://github.com/zFitness>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Base } from './base';

export type FontType = 'ttf' | 'eot' | 'woff' | 'woff2' | 'svg';

export interface FileOptions {
    /** 支持文件地址，也支持文件 buffer */
    path?: string | Buffer;
    /** 导出的字体类型 */
    types?: FontType[];
}

export interface FontOptions {
    /** 字体的 postscript name，默认是 1024 */
    id: string;
    /** 字体的水平画布大小，默认是 1024 */
    horizAdvX: number;
    /** 字体的垂直画布大小，默认是 1024 */
    vertAdvY: number;
}

export interface GlyphOptions {
    /** 字体对应的 unicode */
    unicode: string;
    /** 字体对应的名称,默认是 unicode */
    glyphName: string;
    /** 字体对应的序列，这个是具体的字体形状, 不是是做了变化之后的，不建议直接使用这个 d ，建议使用 SVG 参数替代，内部会帮忙把 SVG 转换成对应的 d 参数 */
    d: string;
    /** 字体的水平画布大小，默认 1024 */
    horizAdvX: number;
    /** 字体的垂直画布大小，默认 1024 */
    vertAdvY: number;
}

export interface FontFaceOptions {
    /** 字体的 fontfamily */
    fontFamily: string;
    /** 字体的粗细程度，默认是 400 */
    fontWeight: string;
    /** 字体定义一个正常或经过伸缩变形的字体外观, 默认是 normal */
    fontStretch: string;
    /** 字体的 unitsPerEm 默认是 1024 */
    unitsPerEm: string;
    /** 字体的上偏移量，默认是 812 */
    ascent: string;
    /** 字体的下偏移量，默认是 -212 */
    descent: string;
}

/** glyph 字形对象代表了具体某个字的信息 */
export class Glyph extends Base<GlyphOptions> {
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

/** fontface 对象包含了字体的一些特殊相关信息 */
export class FontFace extends Base<FontFaceOptions> {}

/** 一个 font 对象就表示解析后的字体对象，包含字体所有的信息 */
export class Font extends Base<FontOptions> {
    /** 获取对应的 fontface 对象 */
    getFontface(): FontFace;
    /** 设置对应的 fontface 对象 */
    setFontface(fontFace: FontFace | FontFaceOptions): void;
    /** 获取指定文字（keys）的 SVG。 */
    getSvg(keys: string): string | Map<string, string>;
    /** 用于针对字设置对应的 SVG 图形 key是对应的字，也可以是 unicode, value是对应的svg图形 */
    setSvg(key: string, value: string): void;
    /** 用于针对字设置对应的 SVG 图形, 可用于设置多个 */
    setSvg(obj: Record<string, string>): void;
    /** 获取指定文字（keys）的 glyph 对象, 如果是单个字就返回一个 glyph 对象，否则返回一个 hash 对象，key 是 unicode，value 是对应的 glyph 对象 */
    getGlyph(keys: string | string[]): Glyph | Record<string, Glyph>;
    /** 用于针对字设置对应的 glyph 对象 */
    setGlyph(key: string, value: Glyph | GlyphOptions): void;
    /** 用于针对字设置对应的 glyph 对象 */
    setGlyph(arg0: Record<string, Glyph | GlyphOptions>): void;
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
    output(options?: FileOptions): Buffer[];
}

/**
 * 生成一个空白字体对像
 * @param options
 */
export function create(options?: FileOptions): Font;
/**
 * 解析一个已有字体，支持svg,ttf的字体
 * @param input
 */
export function transfer(path: string | Buffer, options?: FontOptions): Font;
