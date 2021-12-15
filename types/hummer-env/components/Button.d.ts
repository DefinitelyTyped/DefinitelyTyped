interface Button extends HummerComponent {
    style: ButtonStyle;
    /**
     * 按钮文本
     */
    text: string;
    /**
     * 按压状态下的样式
     */
    pressed: {
        backgroundColor?: string;
        color?: string;
    };
    /**
     * 禁用状态下的样式
     */
    disabled: {
        backgroundColor?: string;
        color?: string;
    };
}
declare const Button: {
    prototype: Button;
    /**
     * 按钮控件
     */
    new (): Button;
};
