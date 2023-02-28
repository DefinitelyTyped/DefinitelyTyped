interface Input extends HummerComponent {
    style: InputStyle;
    /**
     * 输入文本内容
     */
    text: string;
    /**
     * 占位提示文本
     */
    placeholder: string;
    /**
     * 是否处于激活状态, 默认false
     */
    focused: boolean;
}
declare const Input: {
    prototype: Input;
    /**
     * 单行文本输入组件。
     */
    new (): Input;
};
