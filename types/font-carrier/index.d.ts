// Type definitions for font-carrier 0.3
// Project: https://github.com/purplebamboo/font-carrier#readme
// Definitions by: zfitness <https://github.com/zFitness>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Font, FontOptions, FontType } from './lib/font';
import { Glyph } from './lib/glyph';

/**
 * 生成一个空白字体对像
 * @param options
 */
export function create(options?: {
    /** 支持文件地址，也支持文件 buffer */
    path?: string | Buffer;
    /** 导出的字体类型 */
    types?: FontType[];
}): Font;
/**
 * 解析一个已有字体，支持svg,ttf的字体
 * @param input
 */
export function transfer(path: string | Buffer, options?: FontOptions): Font;

export { Font, Glyph };
