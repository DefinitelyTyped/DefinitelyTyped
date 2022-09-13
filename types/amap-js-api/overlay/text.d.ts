declare namespace AMap {
    namespace Text {
        type TextAlign = 'left' | 'right' | 'center';
        type VerticalAlign = 'top' | 'middle' | 'bottom';
        interface EventMap<I = Text> extends Marker.EventMap<I> { }
        interface Options extends Marker.Options {
            /**
             * 文本内容
             */
            text?: string | undefined;
            /**
             * 对齐方式
             */
            textAlign?: TextAlign | undefined;

            verticalAlign?: VerticalAlign | undefined;
        }
    }

    class Text<ExtraData = any> extends Marker<ExtraData> {
        /**
         * 纯文本标记
         * @param options 选项
         */
        constructor(options?: Text.Options);
        /**
         * 标记显示的文本内容
         */
        getText(): string;
        /**
         * 修改文本内容
         * @param text 文本内容
         */
        setText(text: string): void;
        /**
         * 设置文本样式
         * @param style 文本样式
         */
        setStyle(style: object): void;
    }
}
