// Type definitions for watermark-dom 2.3
// Project: https://github.com/saucxs/watermark-dom (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: shenhaoliang <https://github.com/shlroland>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace watermarkDom;
export default watermarkDom;

/*~ You can declare types that are available via importing the module */
export interface Settings {
    watermark_id: string; //水印总体的id
    watermark_prefix: string; //小水印的id前缀
    watermark_txt: string; //水印的内容
    watermark_x: number; //水印起始位置x轴坐标
    watermark_y: number; //水印起始位置Y轴坐标
    watermark_rows: number; //水印行数
    watermark_cols: number; //水印列数
    watermark_x_space: number; //水印x轴间隔
    watermark_y_space: number; //水印y轴间隔
    watermark_font: string; //水印字体
    watermark_color: string; //水印字体颜色
    watermark_fontsize: string; //水印字体大小
    watermark_alpha: number; //水印透明度，要求设置在大于等于0.005
    watermark_width: number; //水印宽度
    watermark_height: number; //水印长度
    watermark_angle: number; //水印倾斜度数
    watermark_parent_width: number; //水印的总体宽度（默认值：body的scrollWidth和clientWidth的较大值）
    watermark_parent_height: number; //水印的总体高度（默认值：body的scrollHeight和clientHeight的较大值）
    watermark_parent_node: Element | null; //水印插件挂载的父元素element,不输入则默认挂在body上
    monitor: boolean; //monitor 是否监控， true: 不可删除水印; false: 可删水印。
}

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
export namespace watermarkDom {
    /*~ For example, given this definition, someone could write:
     *~   import { subProp } from 'yourModule';
     *~   subProp.foo();
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.subProp.foo();
     */
    function init(settings: Partial<Settings>): void;

    function load(settings: Partial<Settings>): void;

    function remove(): void;
}
