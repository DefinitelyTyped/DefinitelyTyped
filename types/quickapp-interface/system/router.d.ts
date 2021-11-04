/**
 * 页面路由
 * 接口声明: 无需声明
 */
declare module '@system.router' {
    /**
     * 跳转到应用内的某个页面
     * @param obj
     */
    function push(obj: {
        /**
         * 要跳转到的 uri，可以是下面的格式：
         * 包含 schema 的完整 uri；目前支持的 schema 有 tel，sms 和 mailto，例如 tel:10086。
         * 以‘/’开头的应用内页面的路径；例：/about。
         * 以非‘/’开头的应用内页面的名称;例：About。
         * 特殊的,如果 uri 的值是"/",则跳转到 path 为"/"的页,没有则跳转到首页
         * 支持包含 schema 的完整 uri。对于带有 schema 的 uri，处理流程如下：
         * 查找 app 下所有 page 的 filter 设置来选择合适的 page 处理请求（参见manifest 文件）
         * 如果没有合适的 page 能够处理请求，会使用默认策略来处理请求。目前默认策略支持对 http、https、internal 这几种 schema 的处理
         * 如果默认策略也不能处理请求，会尝试使用系统中的应用来处理请求
         * 如果没有系统应用可以处理请求，会抛弃请求
         * 默认策略的处理逻辑：
         * 如果 schema 是 http/https，会用内置的 web 页面打开网页
         * 如果 schema 是 internal（参见文件组织），会根据 uri 的文件扩展名来确定文件类型，再调用系统中的应用打开文件
         * 如果 schema 是 hap（参见hap链接），会跳转到 hap链接 所支持的类型
         */
        uri: string;
        /**
         * 跳转时需要传递的数据，跳转到短信发送页面时，可以通过body（1040+）插入短信内容；跳转到快应用页面时，参数可以在页面中通过this.param1的方式使用，param1 为 json 中的参数名，param1 对应的值会统一转换为 String 类型
         */
        params?: {
            /**
             * 跳转时短信发送页面时携带的短信内容。
             * [1040+]
             */
            body?: string;
            /**
             * 快应用启动参数，目前仅支持"clearTask"，在启动目标页面时会清除除此页面外的其他页面。详见页面启动模式
             * [1050+]
             */
            ___PARAM_LAUNCH_FLAG___?: string;
            /**
             * 配置跳转动画模式
             * [1070+]
             */
            ___PARAM_PAGE_ANIMATION___?: {
                /**
                 * 打开进入当前页时当前页动画，可选值 slide， none，默认为slide
                 */
                openEnter?: string;
                /**
                 * 关闭返回当前页时当前页动画，可选值 slide， none，默认为slide
                 */
                closeEnter?: string;
                /**
                 * 打开下一页，退出当前页时当前页动画，可选值 slide， none，默认为slide
                 */
                openExit?: string;
                /**
                 * 返回上一页，退出当前页时当前页动画，可选值 slide， none，默认为slide
                 */
                closeExit?: string;
            };
        };
    }): void;

    /**
     * 跳转到应用内的某个页面，当前页面无法返回
     * @param obj
     */
    function replace(obj: {
        /**
         * 要跳转到的 uri，可以是下面的格式：
         * 以"/"开头的应用内页面的路径；例：/about。
         * 以非"/"开头的应用内页面的名称;例：About。
         * 特殊的,如果 uri 的值是"/",则跳转到 path 为"/"的页,没有则跳转到首页
         */
        uri: string;
        /**
         * 跳转时需要传递的数据，参数可以在页面中通过this.param1的方式使用，param1 为 json 中的参数名，param1 对应的值会统一转换为 String 类型
         */
        params?: object;
    }): void;

    /**
     * 返回指定页面
     * @param obj
     *  path 返回目标页面的路径
     */
    function back(obj: {
        /**
         * 返回目标页面的路径，可以是以下几种取值：
         * 1、不传该参数，返回上一页面
         * 2、以"/"开头的应用内已打开页面的路径；例：/about。
         * 3、特殊的,如果 path 的值是"/",则跳转到页面名称为"/"的页,没有则跳转到首页
         * 注意点：
         * 1、path 需要是以"/"开头的当前应用已经打开的页面路径，否则均视为无效参数，返回上一页面
         * 2、若根据 path 未匹配到已经打开的页面，返回上一页面
         * 3、若根据 path 参数匹配到多个页面，返回至最后打开的页面
         * [1020+]
         */
        path?: string;
    }): void;

    /**
     * 清空所有历史页面记录，仅保留当前页面
     */
    function clear(): void;

    /**
     * 获取当前页面栈的页面数量
     * @returns 页面数量
     */
    function getLength(): number;

    /**
     * 获取当前页面状态
     */
    function getState(): {
        /**
         * 当前页面在页面栈中的位置
         */
        index: number;
        /**
         * 当前页面的名称
         */
        name: string;
        /**
         * 当前页面的路径
         */
        path: string;
    };

    /**
     * 获取当前页面栈列表
     * [1070+]
     */
    function getPages(): [
        {
            /**
             * 页面的名称
             */
            name: string;
            /**
             * 页面的路径
             */
            path: string;
        },
    ];
}
