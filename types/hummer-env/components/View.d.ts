interface View extends HummerComponent, ContainerComponent {
    style: ViewStyle;
}
declare const View: {
    prototype: View;
    /**
     * 容器视图，类似于web端的div标签，内部可以放入其他子视图。
     */
    new (id?: string): View;
};
