import Base = require('./base');

declare namespace FontFace {
    interface FontFaceOptions {
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
}
/** fontface 对象包含了字体的一些特殊相关信息 */
declare class FontFace extends Base<FontFace.FontFaceOptions> {}

export = FontFace;
