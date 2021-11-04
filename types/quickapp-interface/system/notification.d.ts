/**
 * 通知消息
 * 接口声明: {"name": "system.notification"}
 */
declare module '@system.notification' {
    /**
     * 打开网页，标题栏样式与打开webview的页面的标题栏样式相同，在webview的useragent后追加内容，格式是hap/<平台版本号>/<厂商标识> <平台应用包名>/<平台应用版本号> <应用名>/<应用版本号> (<来源信息>)。“来源信息”与app接口的getInfo方法返回结果中的source字段相同。
     * @param obj
     */
    function show(obj: {
        /**
         * 标题
         */
        contentTitle?: string;
        /**
         * 内容
         */
        contentText?: string;
        /**
         * 通知点击后触发动作的信息
         */
        clickAction?: {
            /**
             * 点击通知后跳转的页面地址。支持的格式包括：
             * 1、以"/"开头的应用内页面的路径；例：/about
             * 2、以非"/"开头的应用内页面的名称;例：About
             * 3、特殊的,如果 uri 的值是"/",则跳转到 path 为"/"的页,没有则跳转到首页
             * 可以通过"?param1=value1"的方式添加参数，参数可以在页面中通过this.param1的方式使用
             */
            uri: string;
        };
    }): void;
}
