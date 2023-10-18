export as namespace watermark;
export interface Settings {
    /**
     * 水印总体的id
     *
     * @default wm_div_id
     */
    watermark_id?: string | undefined;
    /**
     * 小水印的id前缀
     *
     * @default mask_div_id
     */
    watermark_prefix?: string | undefined;
    /**
     * 水印的内容
     *
     * @default 测试水印
     */
    watermark_txt?: string | undefined;
    /**
     * 水印起始位置x轴坐标
     *
     * @default 20
     */
    watermark_x?: number | undefined;
    /**
     * 水印起始位置Y轴坐标
     *
     * @default 20
     */
    watermark_y?: number | undefined;
    /**
     * 水印行数
     *
     * @default 0
     */
    watermark_rows?: number | undefined;
    /**
     * 水印列数
     *
     * @default 0
     */
    watermark_cols?: number | undefined;
    /**
     * 水印x轴间隔
     *
     * @default 50
     */
    watermark_x_space?: number | undefined;
    /**
     * 水印y轴间隔
     *
     * @default 50
     */
    watermark_y_space?: number | undefined;
    /**
     * 水印字体
     *
     * @default 微软雅黑
     */
    watermark_font?: string | undefined;
    /**
     * 水印字体颜色
     *
     * @default 水印字体颜色
     */
    watermark_color?: string | undefined;
    /**
     * 水印字体大小
     *
     * @default 18px
     */
    watermark_fontsize?: string | undefined;
    /**
     * 水印透明度
     *
     * @description 要求设置在大于等于0.005
     * @default 0.15
     */
    watermark_alpha?: number | undefined;
    /**
     * 水印宽度
     *
     * @default 100
     */
    watermark_width?: number | undefined;
    /**
     * 水印长度
     *
     * @default 100
     */
    watermark_height?: number | undefined;
    /**
     * 水印倾斜度数
     *
     * @default 15
     */
    watermark_angle?: number | undefined;
    /**
     * 水印的总体宽度
     *
     * @default body的scrollWidth和clientWidth的较大值
     */
    watermark_parent_width?: number | undefined;
    /**
     * 水印的总体高度
     *
     * @default body的scrollHeight和clientHeight的较大值
     */
    watermark_parent_height?: number | undefined;
    /**
     * 水印插件挂载的父元素element,不输入则默认挂在body上
     */
    watermark_parent_node?: Element | null | undefined;
    /**
     * monitor 是否监控， true: 不可删除水印; false: 可删水印。
     */
    monitor?: boolean | undefined;
}

export function init(settings: Settings): void;

export function load(settings: Settings): void;

export function remove(): void;
