declare namespace AMap {
    namespace ContextMenu {
        interface Options {
            /**
             * 右键菜单内容
             */
            content?: string | HTMLElement;

            // internal
            visible?: boolean;
        }

        interface EventMap<I> {
            items: Event<'items'>;
            open: Event<'open', { target: I }>;
            close: Event<'close', { target: I }>;
        }
    }

    class ContextMenu<ExtraData = any> extends Overlay<ExtraData> {
        /**
         * 地图右键菜单
         * @param options 选项
         */
        constructor(options?: ContextMenu.Options);
        /**
         * 右键菜单中添加菜单项
         * @param text 菜单显示内容
         * @param fn 该菜单下需进行的操作
         * @param num 当前菜单项在右键菜单中的排序位置，以0开始
         */
        addItem(text: string, fn: (this: HTMLLIElement) => void, num?: number): void;
        /**
         * 删除一个菜单项
         * @param text 菜单显示内容
         * @param fn 该菜单下需进行的操作
         */
        removeItem(text: string, fn: (this: HTMLLIElement) => void): void;
        /**
         * 在地图的指定位置打开右键菜单。
         * @param map 目标地图
         * @param position 打开位置经纬度
         */
        open(map: Map, position: LocationValue): void;
        /**
         * 关闭右键菜单
         */
        close(): void;
    }
}
