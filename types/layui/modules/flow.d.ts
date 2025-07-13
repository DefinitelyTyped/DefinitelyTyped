declare namespace Layui {
    interface FlowOptions {
        /**
         * 指定列表容器的选择器
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 指定触发流加载的滚动条所在元素选择器
         * @default document
         */
        scrollElem?: string | HTMLElement | Document;
        /**
         * 是否自动加载。如果设为 false，会在列表底部生成一个 `加载更多` 的按钮，点击时才会加载下一页数据
         * @default true
         */
        isAuto?: boolean;
        /**
         * 用于显示末页内容，可传入任意 HTML 字符。默认为：`没有更多了`
         */
        end?: string;
        /**
         * 是否开启信息流中的图片懒加载。若设为 true ，则只会对在可视区域的图片进行按需加载。
         * 但同时，在拼接列表字符的时候，您不能给列表中的 `<img>` 标签赋值 `src`，必须要用 `lay-src` 属性取代，如：
         * ```html
         * layui.each(data, function(index, item){
         *  lis.push('<li><img lay-src="'+ item.src +'"></li>');
         * });
         * ```
         */
        isLazyimg?: boolean;
        /**
         * 与底部的临界距离。即当滚动条与底部产生该距离时，触发加载。`isAuto:true` 时有效。
         * @default 50
         */
        mb?: number;
        /**
         * 指定触发加载的方向
         * @default 'bottom'
         * @since 2.9.7
         */
        direction?: "bottom" | "top";
        /**
         * 自定义"加载更多"按钮文本
         * @since 2.9.11
         */
        moreText?: string;
        /**
         * 到达临界点触发加载的回调
         */
        done?: (page: number, next: (html: string, hasMore: boolean) => void) => void;
    }

    /**
     * 流加载
     * @see https://layui.dev/docs/2/flow/
     */
    interface Flow {
        /**
         * 流加载
         * @param option 信息流参数
         */
        load(option: FlowOptions): void;

        /**
         * 图片懒加载
         * @param option 参数
         */
        lazyimg(option: {
            /**
             * 指定开启懒加载的img元素选择器，如 `elem: '.demo img'` 或 `elem: 'img.load'`
             * @default 'img'
             */
            elem?: string;
            /**
             * 滚动条所在元素选择器
             * @default document
             */
            scrollElem?: string | HTMLElement | Document;
        }): void;
    }
}
