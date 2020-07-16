declare namespace AMap {
    namespace DomUtil {
        /**
         * 获取DOM元素的大小
         * @param dom DOM元素
         */
        function getViewport(dom: HTMLElement): Size;
        /**
         * 获取DOM元素距离窗口左上角的距离
         * @param dom DOM元素
         */
        function getViewportOffset(dom: HTMLElement): Pixel;
        /**
         * 在parentNode内部创建一个className类名的tagName元素
         * @param tagName 标签名称
         * @param parent 父节点
         * @param className 类名
         */
        function create<K extends keyof HTMLElementTagNameMap>(
            tagName: K,
            parent?: HTMLElement,
            className?: string
        ): HTMLElementTagNameMap[K];
        /**
         * 给DOM元素设置为className样式
         * @param dom DOM元素
         * @param className 类名
         */
        function setClass(dom: HTMLElement, className?: string): void;
        /**
         * DOM元素是否包含className
         * @param dom DOM元素
         * @param className 类名
         */
        function hasClass(dom: HTMLElement, className: string): boolean;
        /**
         * 给DOM元素添加一个className
         * @param dom DOM元素
         * @param className 类名
         */
        function addClass(dom: HTMLElement, className: string): void;
        /**
         * 给DOM元素删除一个className
         * @param dom DOM元素
         * @param className 类名
         */
        function removeClass(dom: HTMLElement, className: string): void;
        /**
         * 给DOM元素设定一个透明度
         * @param dom DOM元素
         * @param opacity 透明度(0-1)
         */
        function setOpacity(dom: HTMLElement, opacity: number): void;
        /**
         * 给DOM元素旋转一个角度，以center为中心，center以元素左上角为坐标原点
         * @param dom DOM元素
         * @param deg 旋转角度
         * @param origin 旋转中心
         */
        function rotate(dom: HTMLElement, deg: number, origin?: { x: number, y: number }): void;
        /**
         * 给DOM元素删除一组样式，Object同样式表
         * @param dom DOM元素
         * @param style 样式
         */
        function setCss(dom: HTMLElement | HTMLElement[], style: Partial<CSSStyleDeclaration>): typeof DomUtil; // this
        /**
         * 清空DOM元素
         * @param dom DOM元素
         */
        function empty(dom: HTMLElement): void;
        /**
         * 将DOM元素从父节点删除
         * @param dom DOM元素
         */
        function remove(dom: HTMLElement): void;
    }
}
