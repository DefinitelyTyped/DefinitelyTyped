import Base = require('./base');
import Font = require('./font');

declare namespace Glyph {
    interface GlyphOptions {
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
}

/** glyph 字形对象代表了具体某个字的信息 */
declare class Glyph extends Base<Glyph.GlyphOptions> {
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

export = Glyph;
