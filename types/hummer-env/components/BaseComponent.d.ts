interface HummerComponent {
    /**
     * @summary 设置组件样式
     */
    style: HummerCommonStyle;
    /**
     * @summary 组件是否响应交互
     */
    enable: boolean;
    /**
     * 异步获取控件宽高等信息（单位：dp或pt）
     *
     * @param callback 结果回调，返回rect对象
     * @param rect.width  number 控件宽度
     * @param rect.height number 控件高度
     * @param rect.left number 控件左边框相对于父容器左边框的坐标
     * @param rect.right number 控件右边框相对于父容器左边框的坐标
     * @param rect.top number 控件上边框相对于父容器上边框的坐标
     * @param rect.bottom number 控件下边框相对于父容器上边框的坐标
     * @param rect.windowLeft number 控件左边框相对于屏幕左边缘的坐标
     * @param rect.windowRight number 控件右边框相对于屏幕左边缘的坐标
     * @param rect.windowTop number 控件上边框相对于屏幕上边缘的坐标
     * @param rect.windowBottom number 控件下边框相对于屏幕上边缘的坐标
     */
    getRect: (cb: (rect: import('../interface/info').viewRect) => void) => void;
    /**
     * @summary 为组件绑定事件
     * @param type 事件类型
     * @param listener 触发事件后的回调
     */
    addEventListener<K extends keyof import('../interface/event').EventHandlersEventMap>(
        type: K,
        listener: (ev: import('../interface/event').EventHandlersEventMap[K]) => void,
    ): void;
    /**
     * @summary 移除组件事件
     * @param type 事件类型
     * @param listener 移除的事件
     */
    removeEventListener<K extends keyof import('../interface/event').EventHandlersEventMap>(
        type: K,
        listener: (ev: import('../interface/event').EventHandlersEventMap[K]) => void,
    ): void;
    /**
     * @summary 为组件添加动画
     * @param animation : 添加的动画, 通过 KeyframeAnimation | BasicAnimation 生成的实例;
     * @param key: 动画对应的唯一key, 之后可以通过 removeAnimationForKey 删除对应的动画
     */
    addAnimation(animation: KeyframeAnimation | BasicAnimation, key: string): void;
    /**
     * @summary 删除key对应的动画
     * @param key addAnimation时添加的key
     */
    removeAnimationForKey(key: string): void;
    /**
     * @summary 删除组件上的所有动画
     */
    removeAllAnimation(): void;
    /**
     * @summary  页面创建
     */
}

interface ContainerComponent {
    /**
     * 添加子视图
     * @param view 子视图
     */
    appendChild(view: HummerComponent): void;
    /**
     * 移除子视图
     * @param view 子视图
     */
    removeChild(view: HummerComponent): void;
    /**
     * 移除所有子视图
     */
    removeAll(): void;
    /**
     * 在指定子视图前插入一个子视图
     *
     * @param view 新的子视图
     * @param existingChild 指定的子视图
     */
    insertBefore(view: HummerComponent, existingChild: HummerComponent): void;
    /**
     * 把指定的子视图替换成另一个子视图
     *
     * @param newView 新的子视图
     * @param oldView 指定的子视图
     */
    replaceChild(newView: HummerComponent, oldView: HummerComponent): void;
}

interface RootComponent<T = never> {
    onCreate(): T;
    /**
     * @summary  页面显示
     */
    onAppear(): T;
    /**
     * @summary  页面隐藏
     */
    onDisappear(): T;
    /**
     * @summary  页面销毁
     */
    onDestroy(): T;
    /**
     * @summary  页面返回事件 返回true表示要拦截返回事件，不做页面关闭；返回false表示不做拦截，可以正常关闭页面
     */
    onBack(): T extends never ? T : boolean;
}
