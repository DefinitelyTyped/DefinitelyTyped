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

        /**
         * 1091+
         * 设置web组件的userAgent，默认使用快应用的UA。
         * - 设置为system，表示使用系统默认UA。
         * - 设置其他字符串属于自定义UA。
         * - 不设置此字段或者传入空值，使用默认快应用UA。
         */
        useragent?: string;
    }): void;

    /**
     * [1100+]
     * 设置WebView的Cookie信息。
     */
    function setCookie(obj: {
        /**
         * cookie设置的域名
         */
        domain: string;
        /**
         * cookie的名称
         */
        name: string;
        /**
         * cookie的值
         */
        value?: string;
        /**
         * cookie的路径，默认为/
         */
        path?: string;
        /**
         * cookie的过期时间，时间格式必须是GMT时间格式
         */
        expires?: string;
        /**
         * cookie的过期时间，单位为：秒。maxAge优先级高于expires
         */
        maxAge?: string;
        /**
         * cookie其它额外信息
         */
        extra?: string;
        /**
         * 调用成功的回调函数
         */
        success?: () => void;
        /**
         * 调用失败的回调函数
         */
        fail?: () => void;
    }): void;
}
