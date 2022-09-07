// Type definitions for font-carrier 0.3
// Project: https://github.com/purplebamboo/font-carrier#readme
// Definitions by: zfitness <https://github.com/zFitness>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import Font = require('./class/font');
import Glyph = require('./class/glyph');
import FontFace = require('./class/fontface');

/**
 * 生成一个空白字体对像
 * @param options
 */
export function create(options?: Font.FileOptions): Font;
/**
 * 解析一个已有字体，支持svg,ttf的字体
 * @param input
 */
export function transfer(path: string | Buffer, options?: Font.FontOptions): Font;

export { Font, FontFace, Glyph };
