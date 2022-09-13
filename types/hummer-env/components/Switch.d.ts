interface Switch extends HummerComponent {
    style: SwitchStyle;
    /**
     * 是否打开, 默认 false
     */
    checked: boolean;
}
declare const Switch: {
    prototype: Switch;
    /**
     * 开关组件。
     */
    new (): Switch;
};
