/**
 * 打开网页
 * 接口声明: {"name": "system.webview"}
 */
declare module '@system.webview' {
    /**
     * 打开网页，标题栏样式与打开webview的页面的标题栏样式相同，在webview的useragent后追加内容，格式是hap/<平台版本号>/<厂商标识> <平台应用包名>/<平台应用版本号> <应用名>/<应用版本号> (<来源信息>)。“来源信息”与app接口的getInfo方法返回结果中的source字段相同。
     * @param obj
     */
    function loadUrl(obj: {
        /**
         * 要加载的页面url
         */
        url: string;
        /**
         * 是否支持第三方 cookies，设置为 true 时开启接收第三方 cookies。 注意：allowthirdpartycookies只支持安卓 5.0 及以上系统。5.0 以下默认为 true
         * [1030+]
         */
        allowthirdpartycookies?: boolean;
        /**
         * 是否展示默认加载框，默认值是 false
         * [1070+]
         */
        showloadingdialog?: boolean;
    }): void;
}
