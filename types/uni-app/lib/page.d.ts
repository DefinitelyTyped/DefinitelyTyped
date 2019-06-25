declare namespace Page {
    interface CustomShareContent {
        /**
         * 转发标题。默认值：当前应用名称
         */
        title?: string;
        /**
         * 转发路径，必须是以 / 开头的完整路径。默认值：当前页面 path
         */
        path?: string;
        /**
         * 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4，默认值：使用默认截图
         */
        imageUrl?: string;
    }

    interface PageScrollOption {
        /**
         * 页面在垂直方向已滚动的距离（单位px）
         */
        scrollTop: number;
    }

    interface ShareAppMessageOption {
        /**
         * 转发事件来源。
         * 可选值：
         * - `button`：页面内转发按钮；
         * - `menu`：右上角转发菜单。
         *
         */
        from: "button" | "menu" | string;
        /**
         * 如果 `from` 值是 `button`，则 `target` 是触发这次转发事件的 `button`，否则为 `undefined`
         */
        target: any;
        /**
         * 页面中包含`<web-view>`组件时，返回当前`<web-view>`的url
         */
        webViewUrl?: string;
    }

    interface TabItemTapOption {
        /**
         * 被点击tabItem的序号，从0开始
         */
        index: string;
        /**
         * 被点击tabItem的页面路径
         */
        pagePath: string;
        /**
         * 被点击tabItem的按钮文字
         */
        text: string;
    }

    interface PageInstanceBaseProps<D extends AnyObject = any> {
        /**
         * 到当前页面的路径，类型为`String`
         */
        route?: string;
    }

    interface PageInstance<D extends AnyObject = any, T extends AnyObject = any> extends PageInstanceBaseProps<D> {
        /**
         * 生命周期回调—监听页面加载
         * 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
         */
        onLoad?(
            /**
             * 打开当前页面路径中的参数
             */
            query?: { [queryKey: string]: string },
        ): void;
        /**
         * 生命周期回调—监听页面显示
         * 页面显示/切入前台时触发。
         */
        onShow?(): void;
        /**
         * 生命周期回调—监听页面初次渲染完成
         * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
         */
        onReady?(): void;
        /**
         * 生命周期回调—监听页面隐藏
         * 页面隐藏/切入后台时触发。 如 `navigateTo` 或底部 `tab` 切换到其他页面，应用切入后台等。
         */
        onHide?(): void;
        /**
         * 生命周期回调—监听页面卸载
         * 页面卸载时触发。如`redirectTo`或`navigateBack`到其他页面时。
         */
        onUnload?(): void;
        /**
         * 监听用户下拉动作
         * 监听用户下拉刷新事件。
         * - 需要在`pages.json`的页面配置中开启`enablePullDownRefresh`。
         * - 可以通过`uni.startPullDownRefresh`触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
         * - 当处理完数据刷新后，`uni.stopPullDownRefresh`可以停止当前页面的下拉刷新。
         */
        onPullDownRefresh?(): void;
        /**
         * 页面上拉触底事件的处理函数
         * 监听用户上拉触底事件。
         * - 可以在`pages.json`的页面配置中设置触发距离`onReachBottomDistance`。
         * - 在触发距离内滑动期间，本事件只会被触发一次。
         */
        onReachBottom?(): void;
        /**
         * 用户点击右上角转发
         * 监听用户点击页面内转发按钮（`<button>` 组件 `open-type="share"`）或右上角菜单“转发”按钮的行为，并自定义转发内容。
         * **注意：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮**
         * 此事件需要 return 一个 Object，用于自定义转发内容
         */
        onShareAppMessage?(
            /**
             * 分享发起来源参数
             */
            options?: ShareAppMessageOption,
        ): CustomShareContent;
        /**
         * 页面滚动触发事件的处理函数
         * 监听用户滑动页面事件。
         */
        onPageScroll?(
            /**
             * 页面滚动参数
             */
            options?: PageScrollOption,
        ): void;

        /**
         * 当前是 tab 页时，点击 tab 时触发
         */
        onTabItemTap?(
            /**
             * tab 点击参数
             */
            options?: TabItemTapOption,
        ): void;
    }

    type PageConstructor = <T extends AnyObject & PageInstance>(
            options: PageInstance<AnyObject, T> & T,
        ) => void;

    type GetCurrentPages = <T extends AnyObject = {}>() => Array<PageInstance<AnyObject, T> & T>;
}

declare const getCurrentPages: Page.GetCurrentPages;
