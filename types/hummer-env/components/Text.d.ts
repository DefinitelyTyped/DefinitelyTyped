interface Text extends HummerComponent {
    style: TextStyle;
    /**
     * 普通文本内容
     */
    text: string;
    /**
     * 富文本内容
     */
    rickText: import('../interface/info').rickTextType;
    /**
     * 是否支持长按复制功能 默认 false
     */
    textCopyEnable: boolean;
}
declare const Text: {
    prototype: Text;
    /**
     * 文本展示控件。
     */
    new (): Text;
};
